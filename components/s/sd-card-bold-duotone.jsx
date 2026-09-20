import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ei2ht8bsv.css';
import '../../css/d/dp1n3q8en.css';
import '../../css/u/uv3cblu-e.css';
import '../../css/q/q8wvpccph.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ei2ht8bsv"/><path class="dp1n3q8en"/><path class="uv3cblu-e"/><path class="q8wvpccph"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sd-card-bold-duotone"} {...others} />);
}

export default Component;
