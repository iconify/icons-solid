import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vnhmnobuw.css';
import '../../css/y/y3tcgzfpb.css';
import '../../css/f/f4clknuop.css';
import '../../css/c/c0hlzwbrg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="vnhmnobuw"/><path class="y3tcgzfpb"/><path clip-rule="evenodd" class="f4clknuop"/><path class="c0hlzwbrg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:file-smile-outline"} {...others} />);
}

export default Component;
