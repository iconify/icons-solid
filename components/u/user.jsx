import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sgq0p14ld.css';
import '../../css/h/h3h_fhbod.css';
import '../../css/n/npf_28bvp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle class="sgq0p14ld"/><path class="h3h_fhbod"/><path class="npf_28bvp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:user"} {...others} />);
}

export default Component;
