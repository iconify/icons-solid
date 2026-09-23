import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qu-1hxbdt.css';
import '../../css/o/o-xk9mbvs.css';
import '../../css/w/wmmy0pb_j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="qu-1hxbdt"/><path class="o-xk9mbvs"/><path class="wmmy0pb_j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:shirt-sparkles-two-tone"} {...others} />);
}

export default Component;
