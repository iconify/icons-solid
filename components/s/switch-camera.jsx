import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/u/ugosc9c8k.css';
import '../../css/u/uwjn2xv2w.css';
import '../../css/i/izsetltji.css';
import '../../css/r/rfr1n3bmp.css';
import '../../css/o/otijobb3c.css';
import '../../css/k/kn-1y6pge.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="ugosc9c8k wm-shadow"/><path class="uwjn2xv2w"/><path class="izsetltji"/><path class="rfr1n3bmp"/><path class="otijobb3c wm-shine"/><path class="kn-1y6pge wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:switch-camera"} {...others} />);
}

export default Component;
