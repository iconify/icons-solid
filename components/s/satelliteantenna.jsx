import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e4e9wxbzp.css';
import '../../css/w/wb-n_4bzs.css';
import '../../css/y/yykougbct.css';
import '../../css/s/sawph8aiv.css';
import '../../css/t/t-vpdhb4l.css';
import '../../css/q/q0r5gac2g.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="e4e9wxbzp"/><path class="wb-n_4bzs"/><path class="yykougbct"/><path class="sawph8aiv"/><path class="t-vpdhb4l"/><path class="q0r5gac2g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:satelliteantenna"} {...others} />);
}

export default Component;
