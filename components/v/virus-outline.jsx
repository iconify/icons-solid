import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k92lh5ecq.css';
import '../../css/h/hbediwb_x.css';
import '../../css/z/zzj0jng0s.css';
import '../../css/n/nc8mhbb1f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="k92lh5ecq"/><path clip-rule="evenodd" class="hbediwb_x"/><path class="zzj0jng0s"/><path clip-rule="evenodd" class="nc8mhbb1f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:virus-outline"} {...others} />);
}

export default Component;
