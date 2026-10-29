import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/t/t80203ihy.css';
import '../../css/n/nadg1jsjo.css';
import '../../css/g/gt59o1gky.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="t80203ihy"/><path class="nadg1jsjo"/><path class="gt59o1gky"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:corner-up-right"} {...others} />);
}

export default Component;
