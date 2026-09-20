import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/k0aallhpc.css';
import '../../css/z/zu_xp98nf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="k0aallhpc"/><path class="zu_xp98nf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:globe-cursor-two-tone"} {...others} />);
}

export default Component;
