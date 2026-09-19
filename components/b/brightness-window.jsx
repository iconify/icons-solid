import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/l/l4bl3-10q.css';
import '../../css/w/w1chdgabg.css';
import '../../css/m/mux62ac4r.css';
import '../../css/y/ypsi6lb_h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="l4bl3-10q"/><path class="w1chdgabg"/><path class="mux62ac4r"/><path class="ypsi6lb_h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:brightness-window"} {...others} />);
}

export default Component;
