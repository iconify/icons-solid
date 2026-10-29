import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/bw02u64wf.css';
import '../../css/r/rvra-ke0p.css';
import '../../css/m/m1f_eacnh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="bw02u64wf"/><path class="rvra-ke0p"/><path class="m1f_eacnh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:bell-concierge"} {...others} />);
}

export default Component;
