import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/v/vioq9lf0p.css';
import '../../css/t/toncukbto.css';
import '../../css/m/mr1pcgbtj.css';
import '../../css/c/cacomnlqd.css';
import '../../css/r/rcz-smdjy.css';
import '../../css/q/q0r0fqems.css';
import '../../css/m/mh7we7pdg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="vioq9lf0p"/><path class="toncukbto"/><path class="mr1pcgbtj wm-shine"/><path class="cacomnlqd wm-k"/><path class="rcz-smdjy wm-a"/><path class="q0r0fqems"/><path class="mh7we7pdg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:cloud-sun"} {...others} />);
}

export default Component;
