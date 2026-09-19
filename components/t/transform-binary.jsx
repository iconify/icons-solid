import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e7ik_xtrn.css';
import '../../css/w/wx-066bcp.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="e7ik_xtrn"/><path class="wx-066bcp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:transform-binary"} {...others} />);
}

export default Component;
