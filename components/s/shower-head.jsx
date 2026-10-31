import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/a/aqavm7baq.css';
import '../../css/y/yzcppvkpw.css';
import '../../css/t/tmq_-o61v.css';
import '../../css/z/z0af8tbin.css';
import '../../css/a/af5cpjbqh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="aqavm7baq wm-shadow"/><path class="wm-shadow yzcppvkpw"/><path class="tmq_-o61v"/><path class="z0af8tbin"/><path class="af5cpjbqh wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:shower-head"} {...others} />);
}

export default Component;
