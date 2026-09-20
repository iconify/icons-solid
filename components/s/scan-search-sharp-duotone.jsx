import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/m/m-rom16pb.css';
import '../../css/g/g4rgx1bsd.css';
import '../../css/k/ki4iswmtp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="m-rom16pb"/><path class="g4rgx1bsd"/><path clip-rule="evenodd" class="ki4iswmtp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:scan-search-sharp-duotone"} {...others} />);
}

export default Component;
