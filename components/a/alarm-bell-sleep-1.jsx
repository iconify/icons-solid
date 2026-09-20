import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qn0ef8o0z.css';
import '../../css/g/gee2rmnvh.css';
import '../../css/n/ngwg5d_wp.css';
import '../../css/c/cx3zwzdul.css';
import '../../css/f/fh3cy3_vx.css';
import '../../css/z/zgm57cw6s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="qn0ef8o0z"/><path class="gee2rmnvh"/><path class="ngwg5d_wp"/><path class="cx3zwzdul"/><path class="fh3cy3_vx"/><path class="zgm57cw6s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:alarm-bell-sleep-1"} {...others} />);
}

export default Component;
