import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n41vm6i6x.css';
import '../../css/m/m9tth2brq.css';
import '../../css/s/s7rmrvb8z.css';
import '../../css/j/jt9ahzb_l.css';
import '../../css/i/ijlw063pj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="n41vm6i6x"/><rect transform="matrix(1 0 0 -1 14.73 14.45)" class="m9tth2brq"/><rect transform="matrix(1 0 0 -1 7.59 18.02)" class="s7rmrvb8z"/><rect transform="matrix(1 0 0 -1 14.73 14.45)" class="jt9ahzb_l"/><rect transform="matrix(1 0 0 -1 7.59 18.02)" class="jt9ahzb_l"/><path class="ijlw063pj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:chart-bar-stacked-vertical"} {...others} />);
}

export default Component;
