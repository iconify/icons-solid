import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bz7zvfk3h.css';
import '../../css/l/l5tchbczb.css';
import '../../css/x/x4u8pbwjc.css';
import '../../css/e/em7wggvtv.css';
import '../../css/m/m0ji7x0qy.css';
import '../../css/u/uf57z07ig.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/q/qzvy4pbfa.css';
import '../../css/y/yksv0_bgc.css';
import '../../css/z/zvbe4ezzr.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="bz7zvfk3h"/><path class="l5tchbczb"/><g class="x4u8pbwjc"><path class="em7wggvtv"/><path class="m0ji7x0qy"/><circle class="uf57z07ig"/></g><g class="jn8qy4bru"><path class="qzvy4pbfa"/><path class="yksv0_bgc"/><path class="zvbe4ezzr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:evacuate-downstairs"} {...others} />);
}

export default Component;
