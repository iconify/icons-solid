import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/k/kasrvtb-d.css';
import '../../css/r/rf0bxrb0x.css';
import '../../css/j/jkaoqkntv.css';
import '../../css/u/ub10r6bni.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><circle class="kasrvtb-d"/><circle class="rf0bxrb0x"/><path class="jkaoqkntv"/><path class="ub10r6bni"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:transform"} {...others} />);
}

export default Component;
