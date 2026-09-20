import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vrg2kwn0l.css';
import '../../css/n/nvtcicbvr.css';
import '../../css/g/g1p6t0b1u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="vrg2kwn0l"/><path class="nvtcicbvr"/><path class="g1p6t0b1u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:pig-duotone"} {...others} />);
}

export default Component;
