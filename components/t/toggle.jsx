import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/ase33vgvd.css';
import '../../css/r/rcx9p_0iw.css';
import '../../css/f/f_6ibcb-b.css';
import '../../css/u/ui2tzkbto.css';
import '../../css/j/jdvkjybfw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="ase33vgvd wm-shadow"/><path class="rcx9p_0iw"/><path class="f_6ibcb-b"/><path class="ui2tzkbto"/><path class="jdvkjybfw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:toggle"} {...others} />);
}

export default Component;
