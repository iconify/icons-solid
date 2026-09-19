import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qaku_ef4i.css';
import '../../css/r/rk8kk9b0n.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qaku_ef4i"/><path class="rk8kk9b0n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:fire"} {...others} />);
}

export default Component;
