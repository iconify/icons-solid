import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/n19a0sb2n.css';
import '../../css/s/s-fjcvb0a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="n19a0sb2n"/><path class="s-fjcvb0a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:device-tablet-pin"} {...others} />);
}

export default Component;
