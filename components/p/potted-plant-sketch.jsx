import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/p/pfn07zssj.css';
import '../../css/x/xw9d8bbop.css';
import '../../css/c/cp0l62b-f.css';
import '../../css/z/z8_kn595i.css';
import '../../css/f/fcg6i2y3h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="pfn07zssj"/><path class="wm-k xw9d8bbop"/><path class="cp0l62b-f wm-a"/><path class="wm-k z8_kn595i"/><path class="fcg6i2y3h wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:potted-plant-sketch"} {...others} />);
}

export default Component;
