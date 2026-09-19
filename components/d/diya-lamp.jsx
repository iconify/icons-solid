import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b8wmivb3b.css';
import '../../css/c/c87rb3ebe.css';
import '../../css/r/rs3645bhk.css';
import '../../css/p/p4pdcvblu.css';
import '../../css/z/zh154bbhg.css';
import '../../css/u/u-_76mw1p.css';
import '../../css/x/x33swpeug.css';
import '../../css/t/tvya7jz5l.css';
import '../../css/e/ee5xx85mr.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="b8wmivb3b"/><path class="c87rb3ebe"/><path class="rs3645bhk"/><path class="p4pdcvblu"/><path class="zh154bbhg"/><path class="u-_76mw1p"/><path class="x33swpeug"/><path class="tvya7jz5l"/><path class="ee5xx85mr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:diya-lamp"} {...others} />);
}

export default Component;
