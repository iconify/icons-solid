import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/amcf69_jp.css';
import '../../css/m/mwongenbb.css';
import '../../css/u/upo0rhbsd.css';
import '../../css/i/impm-82ll.css';
import '../../css/h/hoyac7t2b.css';
import '../../css/r/rczjqgbnt.css';
import '../../css/m/movr7wb3h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="amcf69_jp wm-shadow"/><path class="mwongenbb"/><path class="upo0rhbsd"/><path class="impm-82ll"/><path class="hoyac7t2b"/><path class="rczjqgbnt"/><path class="movr7wb3h wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:user-plus"} {...others} />);
}

export default Component;
