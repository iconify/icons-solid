import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kxp6cq_-c.css';
import '../../css/n/na5p85bhp.css';
import '../../css/b/botmvgb2j.css';
import '../../css/n/nxgn35i8k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="kxp6cq_-c"/><path class="na5p85bhp"/><path class="botmvgb2j"/><path class="nxgn35i8k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:wi-fi-outline"} {...others} />);
}

export default Component;
