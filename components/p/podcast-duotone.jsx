import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/za979ab-x.css';
import '../../css/m/mfn_rnb_z.css';
import '../../css/k/kil06obbz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="za979ab-x"/><path class="mfn_rnb_z"/><path class="kil06obbz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:podcast-duotone"} {...others} />);
}

export default Component;
