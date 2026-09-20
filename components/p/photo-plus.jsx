import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j6y2_1bpz.css';
import '../../css/h/hn7lp_bzn.css';
import '../../css/s/slfr0rbts.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="j6y2_1bpz"/><path class="hn7lp_bzn"/><path class="slfr0rbts"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:photo-plus"} {...others} />);
}

export default Component;
