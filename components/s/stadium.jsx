import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fbcx6mt1i.css';
import '../../css/w/ww4-jbbso.css';
import '../../css/m/miwzvlnig.css';
import '../../css/b/bhyyzo4zc.css';
import '../../css/i/ifrzx4b6b.css';
import '../../css/m/mgcllkbhf.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="fbcx6mt1i"/><path class="ww4-jbbso"/><path class="miwzvlnig"/><path class="bhyyzo4zc"/><path class="ifrzx4b6b"/><path class="mgcllkbhf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:stadium"} {...others} />);
}

export default Component;
