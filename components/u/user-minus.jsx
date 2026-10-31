import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/u/ujiuozk4f.css';
import '../../css/m/mwongenbb.css';
import '../../css/u/upo0rhbsd.css';
import '../../css/i/impm-82ll.css';
import '../../css/h/hoyac7t2b.css';
import '../../css/r/rczjqgbnt.css';
import '../../css/y/yqtl9hbzt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="ujiuozk4f wm-shadow"/><path class="mwongenbb"/><path class="upo0rhbsd"/><path class="impm-82ll"/><path class="hoyac7t2b"/><path class="rczjqgbnt"/><path class="wm-s yqtl9hbzt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:user-minus"} {...others} />);
}

export default Component;
