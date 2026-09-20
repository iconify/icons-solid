import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jxh-qjyig.css';
import '../../css/h/hxpik_b5n.css';
import '../../css/n/n2jwr5uoi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="jxh-qjyig"/><path class="hxpik_b5n"/><path class="n2jwr5uoi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:mini-music-sqaure-filled"} {...others} />);
}

export default Component;
