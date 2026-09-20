import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jc201ubkb.css';
import '../../css/f/fonruublk.css';
import '../../css/w/wzspxtbtg.css';
import '../../css/u/u9g1h0bnm.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="jc201ubkb"/><path class="fonruublk"/><path class="wzspxtbtg"/><path class="u9g1h0bnm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:contact-phonebook-2"} {...others} />);
}

export default Component;
