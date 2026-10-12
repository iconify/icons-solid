import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qx4xreset.css';
import '../../css/h/hyx6j7bve.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="qx4xreset"/><path class="hyx6j7bve"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:function-20-bold"} {...others} />);
}

export default Component;
