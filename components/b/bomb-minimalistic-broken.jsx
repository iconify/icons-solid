import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/m99yuxjsm.css';
import '../../css/z/zsnush0dj.css';
import '../../css/w/wlfsgdzfw.css';
import '../../css/n/n04922jxw.css';
import '../../css/i/ie3nmnb4k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="m99yuxjsm"/><path class="zsnush0dj"/><path class="wlfsgdzfw"/><path class="n04922jxw"/><path class="ie3nmnb4k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bomb-minimalistic-broken"} {...others} />);
}

export default Component;
