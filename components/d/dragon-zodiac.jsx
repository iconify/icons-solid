import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3lph30dl.css';
import '../../css/z/zckrdzbek.css';
import '../../css/z/zpeej2btf.css';
import '../../css/r/rh0uu3bgf.css';
import '../../css/f/fxpidqb8s.css';
import '../../css/t/t8yppcb_g.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="l3lph30dl"><path class="zckrdzbek"/><path class="zpeej2btf"/><path class="rh0uu3bgf"/><path class="fxpidqb8s"/><path class="t8yppcb_g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:dragon-zodiac"} {...others} />);
}

export default Component;
