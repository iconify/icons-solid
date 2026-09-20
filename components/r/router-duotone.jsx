import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vv8-52bpk.css';
import '../../css/h/hv3eoob3a.css';
import '../../css/q/q--9k7flf.css';
import '../../css/i/ij8v3wbdx.css';
import '../../css/k/k6pdl9s_w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="vv8-52bpk"/><path class="hv3eoob3a"/><path clip-rule="evenodd" class="q--9k7flf"/><path clip-rule="evenodd" class="ij8v3wbdx"/><path class="k6pdl9s_w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:router-duotone"} {...others} />);
}

export default Component;
