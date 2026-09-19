import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/muz8hiwra.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="muz8hiwra"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:photo-camera"} {...others} />);
}

export default Component;
