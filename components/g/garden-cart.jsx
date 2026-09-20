import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rov4vz1hg.css';
import '../../css/w/w94ng0uks.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="rov4vz1hg"/><path class="w94ng0uks"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:garden-cart"} {...others} />);
}

export default Component;
