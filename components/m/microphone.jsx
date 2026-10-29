import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jsqxjabvm.css';
import '../../css/t/t_2lkqbxb.css';
import '../../css/q/qrr-bac5t.css';
import '../../css/n/ngp_cbc6b.css';
import '../../css/x/xivqzgcho.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/e/eq2owibjf.css';
import '../../css/m/m-y235bec.css';
import '../../css/e/eng7p1lpd.css';
import '../../css/x/xa5pkknmk.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGDZjqB7CW" class="jsqxjabvm"/></defs><g class="t_2lkqbxb"><path class="qrr-bac5t wm-shadow"/><path class="ngp_cbc6b"/><path class="xivqzgcho"/><use href="#SVGDZjqB7CW" class="d2kvgvbvc"/><path class="eq2owibjf"/><use href="#SVGDZjqB7CW" class="d2kvgvbvc"/><path class="m-y235bec"/><path class="eng7p1lpd wm-shine"/><path class="wm-deco xa5pkknmk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:microphone"} {...others} />);
}

export default Component;
