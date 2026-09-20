import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kknkqexjp.css';
import '../../css/m/mex7ymchk.css';
import '../../css/x/xr5b5tbwe.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="kknkqexjp"/><path class="mex7ymchk"/><path class="xr5b5tbwe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:text-bubbles"} {...others} />);
}

export default Component;
