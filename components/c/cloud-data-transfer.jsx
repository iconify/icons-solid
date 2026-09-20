import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xuf0xhbhd.css';
import '../../css/r/rn79y5brq.css';
import '../../css/q/qh3ul0cqs.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="xuf0xhbhd"/><path class="rn79y5brq"/><path class="qh3ul0cqs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:cloud-data-transfer"} {...others} />);
}

export default Component;
