import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/s/s5v_k-scy.css';
import '../../css/h/huczy97bo.css';
import '../../css/q/q-lk4g-oi.css';
import '../../css/f/f56xr9b-d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="s5v_k-scy wm-shadow"/><path class="huczy97bo wm-shadow"/><path class="q-lk4g-oi"/><path class="f56xr9b-d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:percent"} {...others} />);
}

export default Component;
