import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/edlr7bbhj.css';
import '../../css/h/hv6j9ibzn.css';
import '../../css/c/c1hh6lm6a.css';
import '../../css/i/i7has7vez.css';
import '../../css/n/n9jk4sb1n.css';
import '../../css/t/tpgehrb3h.css';
import '../../css/m/mpkb6sb2n.css';
import '../../css/y/y_459iefo.css';
import '../../css/j/jqk-5cb9r.css';
import '../../css/y/y9nqx4bal.css';
import '../../css/d/dqm4pismt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="edlr7bbhj wm-shadow"/><path class="hv6j9ibzn wm-shadow"/><path class="c1hh6lm6a"/><path class="i7has7vez"/><path class="n9jk4sb1n"/><path class="tpgehrb3h"/><path class="mpkb6sb2n wm-shine"/><path class="wm-shine y_459iefo"/><path class="jqk-5cb9r"/><path class="y9nqx4bal"/><path class="dqm4pismt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:megaphone"} {...others} />);
}

export default Component;
