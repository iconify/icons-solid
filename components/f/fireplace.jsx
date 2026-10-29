import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/u/uniok4yvf.css';
import '../../css/r/rjgxkfbis.css';
import '../../css/j/jlty7z5sg.css';
import '../../css/g/gtvdzkbaf.css';
import '../../css/l/la1ymxz8w.css';
import '../../css/q/q52t90b6q.css';
import '../../css/s/s8cize7xr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="uniok4yvf wm-shadow"/><path class="rjgxkfbis"/><path class="jlty7z5sg"/><path class="gtvdzkbaf"/><path class="la1ymxz8w"/><path class="q52t90b6q wm-shine"/><path class="s8cize7xr wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:fireplace"} {...others} />);
}

export default Component;
