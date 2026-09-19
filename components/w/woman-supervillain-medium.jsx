import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/ktfga_2vp.css';
import '../../css/q/qtafv-b3b.css';
import '../../css/v/veq9n-bol.css';
import '../../css/m/m08rv52hn.css';
import '../../css/c/c05rt3s_i.css';
import '../../css/c/caetembdt.css';
import '../../css/w/w-ydgabdf.css';
import '../../css/w/wsb0_bibj.css';
import '../../css/u/um6y3pbqe.css';
import '../../css/z/zgdetdbrp.css';
import '../../css/i/ig7tm-bxn.css';
import '../../css/r/r86fjgbbv.css';
import '../../css/s/s6jfq12av.css';
import '../../css/s/seu6grbua.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="ktfga_2vp"/><path class="qtafv-b3b"/><path class="veq9n-bol"/><path class="m08rv52hn"/><path class="c05rt3s_i"/><path class="caetembdt"/><path class="w-ydgabdf"/><path class="wsb0_bibj"/><path class="um6y3pbqe"/><path class="zgdetdbrp"/><path class="ig7tm-bxn"/><path class="r86fjgbbv"/><path class="s6jfq12av"/><path class="seu6grbua"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:woman-supervillain-medium"} {...others} />);
}

export default Component;
