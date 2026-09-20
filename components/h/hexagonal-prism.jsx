import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p578aizgc.css';
import '../../css/z/z2_wy8fmg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="p578aizgc"/><path class="z2_wy8fmg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:hexagonal-prism"} {...others} />);
}

export default Component;
