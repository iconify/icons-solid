import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ysj58sbch.css';
import '../../css/t/tvimuc6hh.css';
import '../../css/d/di_j1vbhp.css';
import '../../css/j/jkzy1mcbu.css';
import '../../css/v/vhusiac6m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ysj58sbch"/><path class="tvimuc6hh"/><path class="di_j1vbhp"/><path class="jkzy1mcbu"/><path class="vhusiac6m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:broccoli-duotone"} {...others} />);
}

export default Component;
