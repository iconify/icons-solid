import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qdcqjhx-f.css';
import '../../css/t/t_2lkqbxb.css';
import '../../css/u/u7y0mi5le.css';
import '../../css/i/iqep4ubwo.css';
import '../../css/d/d26hetfpn.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/o/oxwmxohlc.css';
import '../../css/b/b4d90pu6c.css';
import '../../css/d/d8v26pbae.css';
import '../../css/t/t1ph39h0l.css';
import '../../css/i/iqhjyybzt.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGesWGzeZu" class="qdcqjhx-f"/></defs><g class="t_2lkqbxb"><path class="u7y0mi5le wm-shadow"/><path class="iqep4ubwo"/><path class="d26hetfpn"/><use href="#SVGesWGzeZu" class="d2kvgvbvc"/><path class="oxwmxohlc"/><use href="#SVGesWGzeZu" class="d2kvgvbvc"/><path class="b4d90pu6c"/><path class="d8v26pbae wm-shine"/><path class="t1ph39h0l wm-deco"/><path class="iqhjyybzt wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:bell"} {...others} />);
}

export default Component;
