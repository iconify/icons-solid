import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sso-90mgp.css';
import '../../css/c/cvk2mib4i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="sso-90mgp"/><path class="cvk2mib4i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:bucket-droplet"} {...others} />);
}

export default Component;
