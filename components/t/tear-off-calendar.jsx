import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j_04idcau.css';
import '../../css/r/r92qjrbee.css';
import '../../css/c/c2dn6-bls.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/w/wgxp6ybdl.css';
import '../../css/i/iaenl7p1m.css';
import '../../css/u/u7olocczg.css';
import '../../css/r/rp169lb8c.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="j_04idcau"/><path class="r92qjrbee"/><path class="c2dn6-bls"/><g class="jn8qy4bru"><path class="wgxp6ybdl"/><path class="iaenl7p1m"/><path class="u7olocczg"/><path class="rp169lb8c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:tear-off-calendar"} {...others} />);
}

export default Component;
