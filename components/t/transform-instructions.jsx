import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gw068u8kk.css';
import '../../css/w/wx-066bcp.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="gw068u8kk"/><path class="wx-066bcp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:transform-instructions"} {...others} />);
}

export default Component;
