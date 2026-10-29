import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/z/zgjetpbtc.css';
import '../../css/y/y-tf_wblb.css';
import '../../css/h/hptjihb1f.css';
import '../../css/k/k0lyj2b8d.css';
import '../../css/g/ge6pl5b7t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="wm-shadow zgjetpbtc"/><path class="y-tf_wblb"/><path class="hptjihb1f"/><path class="k0lyj2b8d"/><path class="ge6pl5b7t wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:citrus"} {...others} />);
}

export default Component;
