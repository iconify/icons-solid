import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/p/ph3e9pyxc.css';
import '../../css/g/gi9hafbqp.css';
import '../../css/s/swx5ysb8b.css';
import '../../css/p/prncdgd_l.css';
import '../../css/o/ojr6d8bqc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="ph3e9pyxc wm-shadow"/><path class="gi9hafbqp"/><path class="swx5ysb8b"/><path class="prncdgd_l"/><path class="ojr6d8bqc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:ungroup"} {...others} />);
}

export default Component;
