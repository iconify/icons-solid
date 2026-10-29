import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/d/d1x1n7fkh.css';
import '../../css/d/d4t0ziwbp.css';
import '../../css/r/rdkspac5k.css';
import '../../css/u/u5owjhbpv.css';
import '../../css/u/ujqanq2ia.css';
import '../../css/w/weey5bckn.css';
import '../../css/z/zgl_hxbme.css';
import '../../css/f/f451jwb6k.css';
import '../../css/l/ll48iosqq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="d1x1n7fkh wm-shadow"/><path class="d4t0ziwbp"/><path class="rdkspac5k"/><path class="u5owjhbpv"/><path class="ujqanq2ia"/><path class="weey5bckn"/><path class="zgl_hxbme"/><path class="f451jwb6k wm-shine"/><path class="ll48iosqq wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:mushroom"} {...others} />);
}

export default Component;
