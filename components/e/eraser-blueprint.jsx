import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/o/ovlb7dubv.css';
import '../../css/v/vl89ophho.css';
import '../../css/i/ides4ac0q.css';
import '../../css/x/xuaual9ot.css';
import '../../css/e/eyejxqbhe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="ovlb7dubv wm-deco"/><path class="vl89ophho wm-deco"/><path class="ides4ac0q wm-k"/><path class="wm-a xuaual9ot"/><path class="eyejxqbhe wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:eraser-blueprint"} {...others} />);
}

export default Component;
