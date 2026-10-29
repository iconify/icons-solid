import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/p/plhjeib6b.css';
import '../../css/k/kyqyllb4r.css';
import '../../css/m/mi840rjsg.css';
import '../../css/i/i2gjcmbgo.css';
import '../../css/z/z_z2rwqqk.css';
import '../../css/g/gmwf64byv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="plhjeib6b wm-shadow"/><path class="kyqyllb4r"/><path class="mi840rjsg"/><path class="i2gjcmbgo"/><path class="wm-shine z_z2rwqqk"/><path class="gmwf64byv wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:newspaper"} {...others} />);
}

export default Component;
