import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/peykzj6mu.css';
import '../../css/n/nft1ofbdy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="peykzj6mu"/><path class="nft1ofbdy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:device-cctv"} {...others} />);
}

export default Component;
