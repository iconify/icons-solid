import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jnd9-ne4y.css';
import '../../css/j/j31gdzgbk.css';
import '../../css/n/n-yhv1bjy.css';
import '../../css/w/wdphtyb5v.css';
import '../../css/f/fcpnkpbff.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="jnd9-ne4y"/><path class="j31gdzgbk"/><path class="n-yhv1bjy"/><path class="wdphtyb5v"/><path class="fcpnkpbff"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:face-with-open-eyes-and-hand-over-mouth"} {...others} />);
}

export default Component;
