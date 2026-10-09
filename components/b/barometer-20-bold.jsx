import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c0oa-qzdz.css';
import '../../css/i/ir9wdpb0n.css';
import '../../css/x/xonacibwr.css';
import '../../css/j/ja9-u5bih.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="c0oa-qzdz"/><path class="ir9wdpb0n"/><path class="xonacibwr"/><path class="ja9-u5bih"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:barometer-20-bold"} {...others} />);
}

export default Component;
