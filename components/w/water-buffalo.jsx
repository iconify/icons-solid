import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ii-o27bgj.css';
import '../../css/c/cmw98uzxq.css';
import '../../css/l/lu_t6g4se.css';
import '../../css/i/i3-5u4bwm.css';
import '../../css/s/szpbs-bbb.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="ii-o27bgj"/><path class="cmw98uzxq"/><path class="lu_t6g4se"/><path class="i3-5u4bwm"/><path class="szpbs-bbb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:water-buffalo"} {...others} />);
}

export default Component;
