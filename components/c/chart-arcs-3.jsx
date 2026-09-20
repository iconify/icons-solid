import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/ld24yvbps.css';
import '../../css/g/g5h6z7bmk.css';
import '../../css/m/mg2z3q8-e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ld24yvbps"/><path class="g5h6z7bmk"/><path class="mg2z3q8-e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:chart-arcs-3"} {...others} />);
}

export default Component;
