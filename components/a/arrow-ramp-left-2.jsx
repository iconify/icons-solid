import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u-0v-ccut.css';
import '../../css/z/z5e0pyj_j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="u-0v-ccut"/><path class="z5e0pyj_j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:arrow-ramp-left-2"} {...others} />);
}

export default Component;
