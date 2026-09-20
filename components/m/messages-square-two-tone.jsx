import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/melzxt7eq.css';
import '../../css/v/vhimu_b_c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="melzxt7eq"/><path class="vhimu_b_c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:messages-square-two-tone"} {...others} />);
}

export default Component;
