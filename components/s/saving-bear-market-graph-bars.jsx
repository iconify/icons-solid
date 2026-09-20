import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/q46m0ib_p.css';
import '../../css/e/eyw_xr3xg.css';
import '../../css/h/hwmls0boq.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="q46m0ib_p"/><path class="eyw_xr3xg"/><path class="hwmls0boq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:saving-bear-market-graph-bars"} {...others} />);
}

export default Component;
