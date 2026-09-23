import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xnxgw3bke.css';
import '../../css/a/apcmxib4e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="xnxgw3bke"/><path class="apcmxib4e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:scan-text-sparkles"} {...others} />);
}

export default Component;
