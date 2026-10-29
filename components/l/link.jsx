import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/h/hyzypkpgo.css';
import '../../css/b/bwkervbfe.css';
import '../../css/r/rwn-tvwih.css';
import '../../css/a/a-miyabrj.css';
import '../../css/t/tnoqadbgb.css';
import '../../css/n/nxb1sfx5m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="hyzypkpgo wm-shadow"/><path class="bwkervbfe"/><path class="rwn-tvwih"/><path class="a-miyabrj"/><path class="tnoqadbgb wm-shine"/><path class="nxb1sfx5m wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:link"} {...others} />);
}

export default Component;
