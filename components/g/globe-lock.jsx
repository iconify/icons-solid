import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wgjopbb5u.css';
import '../../css/t/t_2lkqbxb.css';
import '../../css/y/yzvfmri-j.css';
import '../../css/z/znhcrkhwk.css';
import '../../css/i/ir5-8cbir.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/g/g-fs_3b9h.css';
import '../../css/s/s4id6yo2p.css';
import '../../css/v/vagmp6thc.css';
import '../../css/t/t2o9wgh8p.css';
import '../../css/f/frzr0ce3m.css';
import '../../css/u/usyb2xbzn.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGogcchGsL" class="wgjopbb5u"/></defs><g class="t_2lkqbxb"><path class="wm-shadow yzvfmri-j"/><path class="znhcrkhwk"/><path class="ir5-8cbir"/><use href="#SVGogcchGsL" class="d2kvgvbvc"/><path class="g-fs_3b9h"/><use href="#SVGogcchGsL" class="d2kvgvbvc"/><path class="s4id6yo2p"/><path class="vagmp6thc wm-shine"/><path class="t2o9wgh8p wm-s"/><path class="frzr0ce3m wm-s"/><path class="usyb2xbzn wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:globe-lock"} {...others} />);
}

export default Component;
