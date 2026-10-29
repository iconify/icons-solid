import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/b/boxjwxkku.css';
import '../../css/y/y_aq3xb_k.css';
import '../../css/b/bg4yluf7x.css';
import '../../css/k/kls2xnbqq.css';
import '../../css/s/sjkbsbc8o.css';
import '../../css/i/ip6602bct.css';
import '../../css/d/dz-w9_b8f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="boxjwxkku wm-shadow"/><path class="y_aq3xb_k"/><path class="bg4yluf7x"/><path class="kls2xnbqq"/><path class="sjkbsbc8o wm-shine"/><path class="ip6602bct wm-deco"/><path class="dz-w9_b8f wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:fish"} {...others} />);
}

export default Component;
