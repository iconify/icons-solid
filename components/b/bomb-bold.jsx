import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pb65vs_ab.css';
import '../../css/r/rn08x5brb.css';
import '../../css/k/kcy73erti.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="pb65vs_ab"/><path class="rn08x5brb"/><path class="kcy73erti"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bomb-bold"} {...others} />);
}

export default Component;
