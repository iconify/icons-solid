import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yvd61yb8z.css';
import '../../css/i/ipgzpqb5j.css';
import '../../css/k/ktyd_mg4r.css';
import '../../css/l/la777zsdh.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="yvd61yb8z"/><path class="ipgzpqb5j"/><path class="ktyd_mg4r"/><path class="la777zsdh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:dashboard-gauge-1"} {...others} />);
}

export default Component;
