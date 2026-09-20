import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/m/m-rom16pb.css';
import '../../css/t/tx3lreb0h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="m-rom16pb"/><path class="tx3lreb0h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:scan-barcode-sharp-duotone"} {...others} />);
}

export default Component;
