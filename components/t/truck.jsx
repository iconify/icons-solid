import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/amlt84-gv.css';
import '../../css/u/ul25qsb-p.css';
import '../../css/w/wpaza5mjr.css';
import '../../css/b/buo1bibpg.css';
import '../../css/j/jqa0hrbdc.css';
import '../../css/v/vrhlvlbks.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="amlt84-gv wm-shadow"/><path class="ul25qsb-p"/><path class="wpaza5mjr"/><path class="buo1bibpg"/><path class="jqa0hrbdc"/><path class="vrhlvlbks"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:truck"} {...others} />);
}

export default Component;
