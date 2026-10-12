import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z04lvc3hj.css';
import '../../css/i/i3qi_3dsj.css';
import '../../css/a/ap3vazb_m.css';
import '../../css/s/s2nc09x3l.css';
import '../../css/w/w82a6y4xb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="z04lvc3hj"/><path class="i3qi_3dsj"/><path class="ap3vazb_m"/><path class="s2nc09x3l"/><path class="w82a6y4xb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:git-compare-arrows-duotone"} {...others} />);
}

export default Component;
