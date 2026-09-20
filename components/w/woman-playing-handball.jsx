import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x4u8pbwjc.css';
import '../../css/f/f59k4sbiy.css';
import '../../css/f/fpuzu4brd.css';
import '../../css/u/uq60aq89l.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/s/sk5kx9bjp.css';
import '../../css/i/iq4_2fzcp.css';
import '../../css/s/s2y6bom3z.css';
import '../../css/o/o-4f0tg3q.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="x4u8pbwjc"><circle class="f59k4sbiy"/><path class="fpuzu4brd"/></g><circle class="uq60aq89l"/><g class="brzn_0bpr"><circle class="sk5kx9bjp"/><circle class="iq4_2fzcp"/><path class="s2y6bom3z"/><path class="o-4f0tg3q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:woman-playing-handball"} {...others} />);
}

export default Component;
