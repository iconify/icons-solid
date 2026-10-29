import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/d/dgqk68f6h.css';
import '../../css/g/g44mj7bdx.css';
import '../../css/e/e4zv33hvo.css';
import '../../css/e/ez6lhmbez.css';
import '../../css/q/q4t8jybsi.css';
import '../../css/l/loeep_bmg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="dgqk68f6h wm-shadow"/><path class="g44mj7bdx"/><path class="e4zv33hvo"/><path class="ez6lhmbez"/><path class="q4t8jybsi wm-shine"/><path class="loeep_bmg wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:message-circle-question"} {...others} />);
}

export default Component;
