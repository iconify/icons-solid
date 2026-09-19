import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3lph30dl.css';
import '../../css/m/mckcljbji.css';
import '../../css/m/myqgw3bux.css';
import '../../css/r/rcgtaxbvi.css';
import '../../css/k/k-1utdbdp.css';
import '../../css/z/zu48h77mc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="l3lph30dl"><path class="mckcljbji"/><path class="myqgw3bux"/><path class="rcgtaxbvi"/><path class="k-1utdbdp"/><path class="zu48h77mc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:acoustic"} {...others} />);
}

export default Component;
