import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/l/l4hadbcyj.css';
import '../../css/l/l0hi-mbxq.css';
import '../../css/n/nd9amtn3d.css';
import '../../css/c/cx4geqb6g.css';
import '../../css/c/cj9-2xbyb.css';
import '../../css/f/fwa6subgs.css';
import '../../css/a/ar1ftv3rd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="l4hadbcyj wm-shadow"/><path class="l0hi-mbxq"/><path class="nd9amtn3d"/><path class="cx4geqb6g"/><path class="cj9-2xbyb"/><path class="fwa6subgs"/><path class="ar1ftv3rd wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:cupid-bow"} {...others} />);
}

export default Component;
