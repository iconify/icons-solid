import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u1o5-hr-p.css';
import '../../css/g/g3py1w2kp.css';
import '../../css/x/xl9rlhbpl.css';
import '../../css/l/l5ymjnbtt.css';
import '../../css/r/rci-ytcnk.css';
import '../../css/n/ns62xgb3b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="u1o5-hr-p"/><path class="g3py1w2kp"/><path class="xl9rlhbpl"/><path class="l5ymjnbtt"/><path class="rci-ytcnk"/><path class="ns62xgb3b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:time-clock-hand-1"} {...others} />);
}

export default Component;
