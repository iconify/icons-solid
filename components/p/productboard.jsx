import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lmmvpew-x.css';
import '../../css/z/zbkydgbar.css';

const viewBox = {"width":64,"height":42};
const content = `<g class="cuyn6tgcc"><path class="lmmvpew-x"/><path class="zbkydgbar"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:productboard"} {...others} />);
}

export default Component;
