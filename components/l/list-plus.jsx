import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/g/gu46j3bti.css';
import '../../css/f/fqx4c0b0g.css';
import '../../css/n/n_c6pzbfl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="gu46j3bti"/><path class="fqx4c0b0g"/><path class="n_c6pzbfl wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:list-plus"} {...others} />);
}

export default Component;
