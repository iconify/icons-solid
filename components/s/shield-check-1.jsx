import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xmuzp3bgs.css';
import '../../css/j/j52af2bgq.css';
import '../../css/q/q2i6htdtg.css';
import '../../css/y/ycklu_bkj.css';
import '../../css/k/k-_3ppp0j.css';
import '../../css/t/tzg2h0bux.css';
import '../../css/g/ghh7nvn0u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="xmuzp3bgs"/><path class="j52af2bgq"/><path class="q2i6htdtg"/><path class="ycklu_bkj"/><path class="k-_3ppp0j"/><path class="tzg2h0bux"/><path class="ghh7nvn0u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:shield-check-1"} {...others} />);
}

export default Component;
