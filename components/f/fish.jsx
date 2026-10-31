import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/hcnp8dbwm.css';
import '../../css/n/n4ookfbhc.css';
import '../../css/f/f_kx4bq1y.css';
import '../../css/e/e6m6j5bxv.css';
import '../../css/a/a88wm0nfl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="hcnp8dbwm wm-shadow"/><path class="n4ookfbhc"/><path class="f_kx4bq1y"/><path class="e6m6j5bxv"/><path class="a88wm0nfl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:fish"} {...others} />);
}

export default Component;
