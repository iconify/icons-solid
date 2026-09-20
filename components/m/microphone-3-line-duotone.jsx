import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/guj5ndblb.css';
import '../../css/s/s8pml3bkm.css';
import '../../css/g/g3qc0bb8u.css';
import '../../css/n/nh-kspbph.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="guj5ndblb"/><path class="s8pml3bkm"/><path class="g3qc0bb8u"/><path class="nh-kspbph"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:microphone-3-line-duotone"} {...others} />);
}

export default Component;
