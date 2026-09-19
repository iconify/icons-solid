import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wlavnba7b.css';
import '../../css/q/q6e25zbab.css';
import '../../css/r/rci3dcsby.css';
import '../../css/u/uwn3tbuio.css';

const viewBox = {"width":100,"height":100};
const content = `<g class="cuyn6tgcc"><circle class="wlavnba7b"/><path class="q6e25zbab"/><circle class="rci3dcsby"/><path class="uwn3tbuio"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:male-female"} {...others} />);
}

export default Component;
