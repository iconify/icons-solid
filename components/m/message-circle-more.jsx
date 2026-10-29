import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/d/dgqk68f6h.css';
import '../../css/g/g44mj7bdx.css';
import '../../css/y/ybtdg6rzs.css';
import '../../css/i/i21i1t6vq.css';
import '../../css/v/vjr9r3b2w.css';
import '../../css/v/varob_bfn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="dgqk68f6h wm-shadow"/><path class="g44mj7bdx"/><path class="ybtdg6rzs"/><path class="i21i1t6vq"/><path class="vjr9r3b2w wm-shine"/><path class="varob_bfn wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:message-circle-more"} {...others} />);
}

export default Component;
