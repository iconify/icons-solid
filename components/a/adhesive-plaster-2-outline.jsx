import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hm3726f7n.css';
import '../../css/f/fekzoofij.css';
import '../../css/a/atr7labfl.css';
import '../../css/m/mtaxqxbsg.css';
import '../../css/e/eqyapregi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="hm3726f7n"/><path class="fekzoofij"/><path class="atr7labfl"/><path class="mtaxqxbsg"/><path clip-rule="evenodd" class="eqyapregi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:adhesive-plaster-2-outline"} {...others} />);
}

export default Component;
