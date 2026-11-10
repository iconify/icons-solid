import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xj2vq8bez.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="xj2vq8bez"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:minus-in-circle"} {...others} />);
}

export default Component;
