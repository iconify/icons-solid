import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y7bbfvb2y.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="y7bbfvb2y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:folder-application-screen"} {...others} />);
}

export default Component;
