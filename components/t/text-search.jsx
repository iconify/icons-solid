import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/gz4rmvf3e.css';
import '../../css/w/wtwdiqbwi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="gz4rmvf3e"/><path class="wm-a wtwdiqbwi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:text-search"} {...others} />);
}

export default Component;
