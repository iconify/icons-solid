import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/c/ch_0tkbkt.css';
import '../../css/n/nsf_xvbsa.css';
import '../../css/v/vv38d_bbb.css';
import '../../css/o/o6-35gb7h.css';
import '../../css/m/m5uv2cc7x.css';
import '../../css/s/sjgcrcdjv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="ch_0tkbkt wm-shadow"/><path class="nsf_xvbsa"/><path class="vv38d_bbb"/><path class="o6-35gb7h"/><path class="m5uv2cc7x wm-shine"/><path class="sjgcrcdjv wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:bookmark-plus"} {...others} />);
}

export default Component;
