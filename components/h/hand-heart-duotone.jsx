import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zdxnsqbhy.css';
import '../../css/z/z2drqj_0h.css';
import '../../css/l/lcgu4nb3z.css';
import '../../css/f/f1rc7mc_w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="zdxnsqbhy"/><path class="z2drqj_0h"/><path class="lcgu4nb3z"/><path class="f1rc7mc_w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:hand-heart-duotone"} {...others} />);
}

export default Component;
