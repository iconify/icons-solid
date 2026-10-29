import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/j/jy68vfbjn.css';
import '../../css/s/s7msvx5lp.css';
import '../../css/j/jp_38qfsh.css';
import '../../css/t/t_mc37bqt.css';
import '../../css/v/v93dtmbch.css';
import '../../css/i/ilvbs_bdh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="jy68vfbjn wm-shadow"/><path class="s7msvx5lp"/><path class="jp_38qfsh"/><path class="t_mc37bqt"/><path class="v93dtmbch"/><path class="ilvbs_bdh wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:bold"} {...others} />);
}

export default Component;
