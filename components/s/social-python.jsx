import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ov02yvbiu.css';
import '../../css/w/w19t2zbtx.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ov02yvbiu"/><path class="w19t2zbtx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:social-python"} {...others} />);
}

export default Component;
