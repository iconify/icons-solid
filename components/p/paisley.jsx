import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/f/fv--wmtes.css';
import '../../css/b/bpth1pzxt.css';
import '../../css/p/px82prbzx.css';
import '../../css/p/p-e-fozhn.css';
import '../../css/g/g2usl4z-d.css';
import '../../css/u/uq0hr-byq.css';
import '../../css/h/h3gm42bix.css';
import '../../css/r/ro0n50j-h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="fv--wmtes wm-shadow"/><path class="bpth1pzxt"/><path class="px82prbzx"/><path class="p-e-fozhn"/><path class="g2usl4z-d"/><path class="uq0hr-byq wm-s"/><path class="h3gm42bix wm-s"/><path class="ro0n50j-h wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:paisley"} {...others} />);
}

export default Component;
