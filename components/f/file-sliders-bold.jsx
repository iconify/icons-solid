import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wiyer81jr.css';
import '../../css/d/d9e_nacvx.css';
import '../../css/s/scux88gbr.css';
import '../../css/c/c73t34bfn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="wiyer81jr"/><path class="d9e_nacvx"/><path clip-rule="evenodd" class="scux88gbr"/><path class="c73t34bfn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:file-sliders-bold"} {...others} />);
}

export default Component;
