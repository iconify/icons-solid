import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n41vm6i6x.css';
import '../../css/m/m9tth2brq.css';
import '../../css/s/s7rmrvb8z.css';
import '../../css/j/jt9ahzb_l.css';
import '../../css/a/atbi5bbsv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="n41vm6i6x"/><rect transform="matrix(0 -1 -1 0 16.62 9.5)" class="m9tth2brq"/><rect transform="matrix(0 -1 -1 0 20.18 16.65)" class="s7rmrvb8z"/><rect transform="matrix(0 -1 -1 0 16.62 9.5)" class="jt9ahzb_l"/><rect transform="matrix(0 -1 -1 0 20.18 16.65)" class="jt9ahzb_l"/><path class="atbi5bbsv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:chart-bar-stacked-horizontal"} {...others} />);
}

export default Component;
