import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bi10sjbpy.css';
import '../../css/m/mzq5g5bac.css';
import '../../css/e/ewwrtcb0r.css';
import '../../css/p/p5cjbq18d.css';
import '../../css/m/myv5azdfm.css';
import '../../css/h/hutszibpn.css';

const viewBox = {"width":12,"height":12};
const content = `<g class="cuyn6tgcc"><rect class="bi10sjbpy"/><rect class="mzq5g5bac"/><rect class="ewwrtcb0r"/><rect class="p5cjbq18d"/><rect class="myv5azdfm"/><rect class="hutszibpn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:grip-12"} {...others} />);
}

export default Component;
