import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jefko1b_v.css';
import '../../css/h/hc5d41b9j.css';
import '../../css/a/a483nz4oq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="jefko1b_v"/><path class="hc5d41b9j"/><path class="a483nz4oq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:circle-progress-play-two-tone"} {...others} />);
}

export default Component;
