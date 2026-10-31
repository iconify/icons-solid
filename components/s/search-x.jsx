import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/e/etwb0fb7d.css';
import '../../css/w/w2ug4zbhk.css';
import '../../css/o/olgj5xbvl.css';
import '../../css/h/haqznqbfc.css';
import '../../css/i/i49wp7b0m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="etwb0fb7d"/><path class="w2ug4zbhk wm-shine"/><path class="olgj5xbvl wm-k"/><path class="haqznqbfc wm-a"/><path class="i49wp7b0m wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:search-x"} {...others} />);
}

export default Component;
