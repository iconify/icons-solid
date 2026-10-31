import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/r/r_3m8gyue.css';
import '../../css/a/aovuyqb0g.css';
import '../../css/n/nag_o8bzi.css';
import '../../css/t/t_jrdsb4n.css';
import '../../css/l/lptgplb-t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="r_3m8gyue"/><path class="aovuyqb0g wm-shine"/><path class="nag_o8bzi wm-k"/><path class="t_jrdsb4n wm-a"/><path class="lptgplb-t wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:pipette"} {...others} />);
}

export default Component;
