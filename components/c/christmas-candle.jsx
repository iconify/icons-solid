import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/h/hb4z9yj8x.css';
import '../../css/b/bo-ljc1md.css';
import '../../css/i/iy5c_d9ih.css';
import '../../css/x/xsqwk6bsh.css';
import '../../css/u/utk69mtxi.css';
import '../../css/y/yu9sii_3x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="hb4z9yj8x"/><path class="bo-ljc1md wm-s"/><path class="iy5c_d9ih wm-shine"/><path class="wm-k xsqwk6bsh"/><path class="utk69mtxi wm-a"/><path class="wm-s yu9sii_3x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:christmas-candle"} {...others} />);
}

export default Component;
