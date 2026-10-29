import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qph67wbba.css';
import '../../css/f/fhycmcb-v.css';
import '../../css/f/fb0las6fs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qph67wbba wm-shadow"/><path class="fhycmcb-v wm-k"/><path class="fb0las6fs wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:arrow-down-left"} {...others} />);
}

export default Component;
