import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/r/ryi1dxbko.css';
import '../../css/b/bjpmb1k5o.css';
import '../../css/p/p_ubr5bwv.css';
import '../../css/h/hq6aujb9s.css';
import '../../css/g/gn1e-5n1r.css';
import '../../css/c/cw7qzob5o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="ryi1dxbko wm-shadow"/><path class="bjpmb1k5o"/><path class="p_ubr5bwv"/><path class="hq6aujb9s"/><path class="gn1e-5n1r wm-shine"/><path class="cw7qzob5o wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:pound-sterling"} {...others} />);
}

export default Component;
