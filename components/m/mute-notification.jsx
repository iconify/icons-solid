import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e3doxobej.css';
import '../../css/c/czogqxb4f.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="e3doxobej"/><path class="czogqxb4f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ep:mute-notification"} {...others} />);
}

export default Component;
