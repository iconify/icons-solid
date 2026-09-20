import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f0fn4dbwa.css';
import '../../css/r/red079bnv.css';
import '../../css/l/lg01or7_e.css';
import '../../css/d/dy1y8yfii.css';
import '../../css/w/wf2inib9f.css';
import '../../css/w/w__zrd_ab.css';
import '../../css/k/kf2xfzb-i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="f0fn4dbwa"/><rect class="red079bnv"/><path class="lg01or7_e"/><rect class="dy1y8yfii"/><rect class="wf2inib9f"/><rect class="w__zrd_ab"/><rect class="kf2xfzb-i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:date-range-duotone"} {...others} />);
}

export default Component;
