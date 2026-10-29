import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/kxan-_bmm.css';
import '../../css/a/aacc-9bme.css';
import '../../css/n/nvu86dbph.css';
import '../../css/d/dpw0_4bhq.css';
import '../../css/z/zfrxwsb-x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="kxan-_bmm"/><path class="aacc-9bme wm-k"/><path class="nvu86dbph wm-a"/><path class="dpw0_4bhq wm-k"/><path class="wm-a zfrxwsb-x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:shield-plus-sketch"} {...others} />);
}

export default Component;
