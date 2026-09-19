import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/y/yc7vspbwi.css';
import '../../css/m/m24kaebtu.css';
import '../../css/d/dgje2mbpi.css';
import '../../css/s/slwri0b9d.css';
import '../../css/l/lx8uc1chl.css';
import '../../css/c/c7ks-ybfy.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="yc7vspbwi"/><path class="m24kaebtu"/><path class="dgje2mbpi"/><path class="slwri0b9d"/><path class="lx8uc1chl"/><path class="c7ks-ybfy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:memory-card"} {...others} />);
}

export default Component;
