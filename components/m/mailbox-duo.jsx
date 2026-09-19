import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r0ro9ykyt.css';
import '../../css/w/w_l8fwasu.css';
import '../../css/h/haf-s8w2i.css';
import '../../css/t/t48_nabfz.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="r0ro9ykyt"/><path class="w_l8fwasu"/><path class="haf-s8w2i"/><path class="t48_nabfz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:mailbox-duo"} {...others} />);
}

export default Component;
