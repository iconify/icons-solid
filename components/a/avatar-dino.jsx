import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/zw1rcdg2e.css';
import '../../css/b/bsavs7uau.css';
import '../../css/y/y3vgs4o4d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="zw1rcdg2e"/><path class="bsavs7uau"/><path class="y3vgs4o4d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:avatar-dino"} {...others} />);
}

export default Component;
