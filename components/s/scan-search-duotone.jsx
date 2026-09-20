import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qjql2tbsq.css';
import '../../css/i/if2h_hcma.css';
import '../../css/k/ki4iswmtp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="qjql2tbsq"/><path class="if2h_hcma"/><path clip-rule="evenodd" class="ki4iswmtp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:scan-search-duotone"} {...others} />);
}

export default Component;
