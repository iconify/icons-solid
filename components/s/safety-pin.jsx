import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sqqwh7w1i.css';
import '../../css/q/q3hvx1bir.css';
import '../../css/y/y6w_ggb5p.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/x/xubhxyy6y.css';
import '../../css/j/jwwaly8qg.css';
import '../../css/h/hty8qsbzs.css';
import '../../css/w/wqsru5bow.css';
import '../../css/b/b9509q9qv.css';
import '../../css/m/mespsvbde.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="sqqwh7w1i"><path class="q3hvx1bir"/><ellipse class="y6w_ggb5p"/></g><g class="brzn_0bpr"><path class="xubhxyy6y"/><path class="jwwaly8qg"/><ellipse class="hty8qsbzs"/><ellipse class="wqsru5bow"/><path class="b9509q9qv"/><path class="mespsvbde"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:safety-pin"} {...others} />);
}

export default Component;
