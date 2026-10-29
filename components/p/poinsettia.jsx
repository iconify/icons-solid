import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/c/cgnehpv1n.css';
import '../../css/b/bkz0f10ac.css';
import '../../css/k/khiijfbzy.css';
import '../../css/m/mladsvy5x.css';
import '../../css/m/mbmh89yfe.css';
import '../../css/a/araqs_btf.css';
import '../../css/t/tq5w-7bph.css';
import '../../css/t/tjruv_bvz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="cgnehpv1n wm-shadow"/><path class="bkz0f10ac"/><path class="khiijfbzy"/><path class="mladsvy5x"/><path class="mbmh89yfe"/><path class="araqs_btf wm-s"/><path class="tq5w-7bph wm-s"/><path class="tjruv_bvz wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:poinsettia"} {...others} />);
}

export default Component;
