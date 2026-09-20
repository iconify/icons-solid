import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x33likbcw.css';
import '../../css/u/u0uwf9b9e.css';
import '../../css/k/kpna6_mdj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="x33likbcw"/><path class="u0uwf9b9e"/><path clip-rule="evenodd" class="kpna6_mdj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:emoji-funny-square-outline"} {...others} />);
}

export default Component;
