import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/a7v63ebic.css';
import '../../css/r/re7s1mb8b.css';
import '../../css/x/xfnzpgbvh.css';
import '../../css/p/pandr5r4z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="a7v63ebic"/><path class="re7s1mb8b"/><path class="xfnzpgbvh"/><path class="pandr5r4z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:bamboo-duo"} {...others} />);
}

export default Component;
