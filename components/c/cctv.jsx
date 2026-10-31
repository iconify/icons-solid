import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/y/y768vnb3q.css';
import '../../css/o/o5i-1xb7l.css';
import '../../css/w/wbnvzqbna.css';
import '../../css/v/vd3mknmey.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow y768vnb3q"/><path class="o5i-1xb7l"/><path class="wbnvzqbna"/><path class="vd3mknmey"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:cctv"} {...others} />);
}

export default Component;
