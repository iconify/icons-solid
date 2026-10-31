import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/g/grre7ybme.css';
import '../../css/w/wu226ccgn.css';
import '../../css/h/h4kim_4pi.css';
import '../../css/y/yur9gvbnw.css';
import '../../css/i/i9yth9bzw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="grre7ybme wm-shadow"/><path class="wu226ccgn"/><path class="h4kim_4pi"/><path class="yur9gvbnw"/><path class="i9yth9bzw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:volume"} {...others} />);
}

export default Component;
