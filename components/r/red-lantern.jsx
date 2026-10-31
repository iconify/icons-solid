import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/s/slsmjmp_v.css';
import '../../css/d/dk5n0xbnd.css';
import '../../css/u/u8blqph1y.css';
import '../../css/f/foful22qz.css';
import '../../css/r/rk8axabng.css';
import '../../css/s/sxq_sn1eh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="slsmjmp_v wm-shadow"/><path class="dk5n0xbnd wm-shadow"/><path class="u8blqph1y"/><path class="foful22qz"/><path class="rk8axabng"/><path class="sxq_sn1eh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:red-lantern"} {...others} />);
}

export default Component;
