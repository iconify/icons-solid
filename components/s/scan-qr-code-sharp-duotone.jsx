import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/m/m-rom16pb.css';
import '../../css/n/n0efjqbrb.css';
import '../../css/l/lt_1--bbq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="m-rom16pb"/><path class="n0efjqbrb"/><path clip-rule="evenodd" class="lt_1--bbq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:scan-qr-code-sharp-duotone"} {...others} />);
}

export default Component;
