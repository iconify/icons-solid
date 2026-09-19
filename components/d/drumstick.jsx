import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h3_aatb9x.css';
import '../../css/b/bkdzqdiui.css';
import '../../css/x/xebye_b2d.css';
import '../../css/i/ictw2ccqc.css';
import '../../css/l/l4se64bjx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="h3_aatb9x"/><ellipse transform="rotate(45 32.535 15.435)" class="bkdzqdiui"/><circle transform="rotate(45 30.06 11.398)" class="xebye_b2d"/><circle transform="rotate(45 37.132 18.47)" class="ictw2ccqc"/><circle transform="rotate(45 31.475 17.055)" class="l4se64bjx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:drumstick"} {...others} />);
}

export default Component;
