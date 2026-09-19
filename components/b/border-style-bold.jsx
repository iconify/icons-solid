import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/titp7-88u.css';
import '../../css/w/wh8sumbmo.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="titp7-88u"/><path class="wh8sumbmo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:border-style-bold"} {...others} />);
}

export default Component;
