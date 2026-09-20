import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/myqkzzb1a.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="myqkzzb1a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:facebook-16"} {...others} />);
}

export default Component;
