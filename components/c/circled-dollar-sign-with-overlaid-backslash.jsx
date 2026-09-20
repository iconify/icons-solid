import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j_weg3b7j.css';
import '../../css/r/rpvb-o6bq.css';
import '../../css/w/wcwvfmbxf.css';
import '../../css/r/reogukpic.css';
import '../../css/v/vuk3x7xtu.css';

const viewBox = {"width":72,"height":72};
const content = `<circle class="j_weg3b7j"/><g class="rpvb-o6bq"><circle class="wcwvfmbxf"/><path class="reogukpic"/><path class="vuk3x7xtu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:circled-dollar-sign-with-overlaid-backslash"} {...others} />);
}

export default Component;
