import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/u/u8rgrcqdt.css';
import '../../css/x/x1h184bjr.css';
import '../../css/s/seqarwbcd.css';
import '../../css/f/ffvfie7iu.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="t_2lkqbxb"><path class="u8rgrcqdt"/><path class="x1h184bjr"/><path class="seqarwbcd"/><path class="ffvfie7iu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:tauri"} {...others} />);
}

export default Component;
