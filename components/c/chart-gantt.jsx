import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/a/a2vyhse3a.css';
import '../../css/p/pm8xm-wru.css';
import '../../css/c/ch9xr31xv.css';
import '../../css/u/uvff1smyk.css';
import '../../css/l/lg2yt8b0i.css';
import '../../css/d/d-bt1lfdw.css';
import '../../css/w/wt6nnybjk.css';
import '../../css/t/t0b4o3b8j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="a2vyhse3a wm-shadow"/><path class="pm8xm-wru"/><path class="ch9xr31xv"/><path class="uvff1smyk"/><path class="lg2yt8b0i"/><path class="d-bt1lfdw"/><path class="wm-deco wt6nnybjk"/><path class="t0b4o3b8j wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:chart-gantt"} {...others} />);
}

export default Component;
