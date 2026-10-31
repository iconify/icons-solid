import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/olrti3bow.css';
import '../../css/f/f68_4ce0z.css';
import '../../css/a/a0_q8jb6i.css';
import '../../css/q/qp2_6vh0j.css';
import '../../css/l/lm0htpbbp.css';
import '../../css/w/ws8xo_gya.css';
import '../../css/j/j45mrfqja.css';
import '../../css/i/iwbmx9b_p.css';
import '../../css/t/te8wl1bgx.css';
import '../../css/b/b4hh3_b5r.css';
import '../../css/o/oznemuz6r.css';
import '../../css/o/o7yej7zyb.css';
import '../../css/o/ooku8vo-z.css';
import '../../css/n/nzh8h1cyr.css';
import '../../css/h/h5puy65cm.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="olrti3bow"/><path class="f68_4ce0z"/><path class="a0_q8jb6i"/><path class="qp2_6vh0j"/><path class="lm0htpbbp"/><path class="ws8xo_gya"/><path class="j45mrfqja"/><path class="iwbmx9b_p"/><path class="te8wl1bgx"/><path class="b4hh3_b5r"/><path class="oznemuz6r"/><path class="o7yej7zyb"/><path class="ooku8vo-z"/><path class="nzh8h1cyr"/><path class="h5puy65cm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:andorra"} {...others} />);
}

export default Component;
