import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/ff5h1hb0y.css';
import '../../css/a/ap37jt1sm.css';
import '../../css/i/ir6qizbhq.css';
import '../../css/r/r6ch2tn-g.css';
import '../../css/n/no_ar1xgm.css';
import '../../css/h/hm4cr9vam.css';
import '../../css/z/zo1om_j7i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ff5h1hb0y"/><path class="ap37jt1sm"/><path class="ir6qizbhq"/><path class="r6ch2tn-g"/><path class="no_ar1xgm"/><path class="hm4cr9vam"/><path class="zo1om_j7i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:email-action-add"} {...others} />);
}

export default Component;
