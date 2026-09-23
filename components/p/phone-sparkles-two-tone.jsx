import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mkuuv1z6l.css';
import '../../css/l/lxr-c948j.css';
import '../../css/n/nh0aceb6k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="mkuuv1z6l"/><path class="lxr-c948j"/><path class="nh0aceb6k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:phone-sparkles-two-tone"} {...others} />);
}

export default Component;
