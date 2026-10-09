import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xaxkg6sjr.css';
import '../../css/k/kvhcgabor.css';
import '../../css/d/dr3bnj-zy.css';
import '../../css/l/l3l3_s14q.css';
import '../../css/m/m0n0n5xlv.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="xaxkg6sjr"/><path class="kvhcgabor"/><path class="dr3bnj-zy"/><path class="l3l3_s14q"/><path class="m0n0n5xlv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:solar-panel-sun-20-bold"} {...others} />);
}

export default Component;
