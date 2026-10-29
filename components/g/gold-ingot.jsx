import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/w/wajnahbzs.css';
import '../../css/e/emy-kcvnb.css';
import '../../css/z/z0oxqwbgz.css';
import '../../css/q/q0_bqz5se.css';
import '../../css/j/j-ehpqsgz.css';
import '../../css/r/r386b-bwl.css';
import '../../css/i/ilvbs_bdh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="wajnahbzs wm-shadow"/><path class="emy-kcvnb"/><path class="z0oxqwbgz"/><path class="q0_bqz5se"/><path class="j-ehpqsgz"/><path class="r386b-bwl"/><path class="ilvbs_bdh wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:gold-ingot"} {...others} />);
}

export default Component;
