import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p5w9n4rnd.css';
import '../../css/f/ft-uu_ism.css';
import '../../css/r/rm1d8ubpu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="p5w9n4rnd"/><path class="ft-uu_ism"/><path class="rm1d8ubpu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:xxx-bold"} {...others} />);
}

export default Component;
