import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/u39c_yipz.css';
import '../../css/t/t2sswdyyp.css';
import '../../css/x/xoiwp6hbu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="u39c_yipz"/><path class="t2sswdyyp"/><path class="xoiwp6hbu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:paintbrush"} {...others} />);
}

export default Component;
