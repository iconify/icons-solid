import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/l/l0kcx-bur.css';
import '../../css/d/d0lh95rjb.css';
import '../../css/x/xl67sbtid.css';
import '../../css/f/focknpd0m.css';

const viewBox = {"width":128,"height":128};
const content = `<g class="d2kvgvbvc"><path class="l0kcx-bur"/><path class="d0lh95rjb"/><path class="xl67sbtid"/><path class="focknpd0m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:opengl"} {...others} />);
}

export default Component;
