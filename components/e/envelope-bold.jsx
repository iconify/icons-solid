import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qx4t8nbiu.css';
import '../../css/n/n4p22bcgb.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="qx4t8nbiu"/><path class="n4p22bcgb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:envelope-bold"} {...others} />);
}

export default Component;
