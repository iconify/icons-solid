import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/j/jwatwdash.css';
import '../../css/c/c2js-acif.css';
import '../../css/u/urct13b8t.css';
import '../../css/i/iwsimibur.css';
import '../../css/d/dulqsmkqx.css';
import '../../css/r/r3gsfnbwd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="jwatwdash wm-shadow"/><path class="c2js-acif"/><path class="urct13b8t"/><path class="iwsimibur"/><path class="dulqsmkqx wm-shine"/><path class="r3gsfnbwd wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:music-2"} {...others} />);
}

export default Component;
