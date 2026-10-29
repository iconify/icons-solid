import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/i/ikfxm0b-b.css';
import '../../css/t/t8i18gbed.css';
import '../../css/h/hvsm3bccg.css';
import '../../css/j/jmi27q__j.css';
import '../../css/e/eoplytbtp.css';
import '../../css/f/fkkoz_btt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="ikfxm0b-b wm-shadow"/><path class="t8i18gbed"/><path class="hvsm3bccg"/><path class="jmi27q__j"/><path class="eoplytbtp wm-shine"/><path class="fkkoz_btt wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:chevrons-up"} {...others} />);
}

export default Component;
