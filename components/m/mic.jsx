import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b9gbdlbzx.css';
import '../../css/n/nccnyto5w.css';

const viewBox = {"width":15,"height":32};
const content = `<g class="cuyn6tgcc"><path class="b9gbdlbzx"/><path class="nccnyto5w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"et:mic"} {...others} />);
}

export default Component;
