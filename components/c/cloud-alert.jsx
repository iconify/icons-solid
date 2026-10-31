import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/r/rczdnpkkp.css';
import '../../css/w/wp_p0wvuz.css';
import '../../css/l/l29rf7_0z.css';
import '../../css/t/twv38kt5g.css';
import '../../css/v/v1-cnzbgg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="rczdnpkkp wm-shadow"/><path class="wp_p0wvuz"/><path class="l29rf7_0z"/><path class="twv38kt5g"/><path class="v1-cnzbgg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:cloud-alert"} {...others} />);
}

export default Component;
