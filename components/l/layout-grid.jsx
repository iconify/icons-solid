import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/x/xkm5ywd2a.css';
import '../../css/i/i0edzy0vq.css';
import '../../css/h/hc-vp7b-z.css';
import '../../css/w/wzb1noicm.css';
import '../../css/y/y43r2nbts.css';
import '../../css/s/sloj1fjmk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="wm-shadow xkm5ywd2a"/><path class="i0edzy0vq"/><path class="hc-vp7b-z"/><path class="wzb1noicm"/><path class="wm-shine y43r2nbts"/><path class="sloj1fjmk wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:layout-grid"} {...others} />);
}

export default Component;
