import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i-9xk77xp.css';
import '../../css/o/ozws_4hvo.css';
import '../../css/y/ywo6qqbhu.css';
import '../../css/w/wd2ux_bhw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="i-9xk77xp"/><path class="ozws_4hvo"/><path class="ywo6qqbhu"/><path class="wd2ux_bhw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:calendar-star"} {...others} />);
}

export default Component;
