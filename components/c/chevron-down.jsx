import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/z/zfcxzfb3g.css';
import '../../css/s/so0578brv.css';
import '../../css/m/mhj5t0-oi.css';
import '../../css/i/i4ag0ebzd.css';
import '../../css/i/iexsup4dq.css';
import '../../css/a/akvr8ibym.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="wm-shadow zfcxzfb3g"/><path class="so0578brv"/><path class="mhj5t0-oi"/><path class="i4ag0ebzd"/><path class="iexsup4dq wm-shine"/><path class="akvr8ibym wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:chevron-down"} {...others} />);
}

export default Component;
