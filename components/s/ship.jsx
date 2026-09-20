import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u_fm6_bas.css';
import '../../css/s/sxagfnubu.css';
import '../../css/q/qu4j6dbzn.css';
import '../../css/e/edek7dbmh.css';
import '../../css/b/b0rpofbpw.css';
import '../../css/s/s4_pvbb4w.css';
import '../../css/e/ed6mz5g0d.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/u/u5cpoqbpw.css';
import '../../css/z/zcj3f0nge.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="u_fm6_bas"/><path class="sxagfnubu"/><path class="qu4j6dbzn"/><path class="edek7dbmh"/><path class="b0rpofbpw"/><path class="s4_pvbb4w"/><path class="ed6mz5g0d"/><g class="jn8qy4bru"><path class="u5cpoqbpw"/><path class="zcj3f0nge"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:ship"} {...others} />);
}

export default Component;
