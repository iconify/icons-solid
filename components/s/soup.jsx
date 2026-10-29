import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9u25nqjh.css';
import '../../css/t/t_2lkqbxb.css';
import '../../css/b/btrc1yb6u.css';
import '../../css/x/xq3o6-y0f.css';
import '../../css/p/pv2yexbys.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/l/ltc4vi0je.css';
import '../../css/w/wdvwmnf3d.css';
import '../../css/a/aqt3ptb0b.css';
import '../../css/q/q_yw93bsi.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGz4ZGPe4G" class="y9u25nqjh"/></defs><g class="t_2lkqbxb"><path class="btrc1yb6u wm-shadow"/><path class="xq3o6-y0f"/><path class="pv2yexbys"/><use href="#SVGz4ZGPe4G" class="d2kvgvbvc"/><path class="ltc4vi0je"/><use href="#SVGz4ZGPe4G" class="d2kvgvbvc"/><path class="wdvwmnf3d"/><path class="aqt3ptb0b wm-shine"/><path class="q_yw93bsi wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:soup"} {...others} />);
}

export default Component;
