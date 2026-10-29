import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/w/w3wmyob4s.css';
import '../../css/c/clo79qb2h.css';
import '../../css/p/p-fhotbcl.css';
import '../../css/b/b3fo07k0j.css';
import '../../css/e/elh_myksv.css';
import '../../css/v/vhesbla4k.css';
import '../../css/z/zy5wd1-0b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="w3wmyob4s wm-shadow"/><path class="clo79qb2h"/><path class="p-fhotbcl"/><path class="b3fo07k0j"/><path class="elh_myksv"/><path class="vhesbla4k wm-shine"/><path class="wm-deco zy5wd1-0b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:stocking"} {...others} />);
}

export default Component;
