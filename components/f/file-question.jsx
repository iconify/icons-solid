import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/f/fd5_dnbey.css';
import '../../css/j/jjadg4b5m.css';
import '../../css/r/rl7ngkbjg.css';
import '../../css/i/i5muwbcga.css';
import '../../css/m/mqgbqy9my.css';
import '../../css/k/kcmb83bpq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="fd5_dnbey wm-shadow"/><path class="jjadg4b5m"/><path class="rl7ngkbjg"/><path class="i5muwbcga"/><path class="mqgbqy9my wm-shine"/><path class="kcmb83bpq wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:file-question"} {...others} />);
}

export default Component;
