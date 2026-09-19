import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k1h899aoi.css';
import '../../css/w/w11ykpb4l.css';
import '../../css/q/q8ei_comh.css';
import '../../css/w/wg4j_ojiz.css';
import '../../css/k/khko_1cpb.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="k1h899aoi"/><path class="w11ykpb4l"/><path class="q8ei_comh"/><path class="wg4j_ojiz"/><path class="khko_1cpb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:mobx"} {...others} />);
}

export default Component;
