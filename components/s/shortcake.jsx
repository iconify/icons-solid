import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/ql7kh6bdw.css';
import '../../css/g/gwe2n0jso.css';
import '../../css/g/gxgzlneps.css';
import '../../css/n/n46964fba.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/i/icn5w7b0j.css';
import '../../css/d/dwsu-cb4e.css';
import '../../css/o/opib-achk.css';
import '../../css/s/sd_o0db3p.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="ql7kh6bdw"/><circle class="gwe2n0jso"/><path class="gxgzlneps"/><path class="n46964fba"/><g class="jn8qy4bru"><path class="icn5w7b0j"/><path class="dwsu-cb4e"/><circle class="opib-achk"/><path class="sd_o0db3p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:shortcake"} {...others} />);
}

export default Component;
