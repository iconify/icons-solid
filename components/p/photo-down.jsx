import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j6y2_1bpz.css';
import '../../css/h/hn7lp_bzn.css';
import '../../css/n/ny-9_7ilp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="j6y2_1bpz"/><path class="hn7lp_bzn"/><path class="ny-9_7ilp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:photo-down"} {...others} />);
}

export default Component;
