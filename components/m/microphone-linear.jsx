import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/guj5ndblb.css';
import '../../css/m/mkwvu5bez.css';
import '../../css/g/gweihee3d.css';
import '../../css/u/ujrmgmblc.css';
import '../../css/o/obcs1cbgf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="guj5ndblb"/><path class="mkwvu5bez"/><path class="gweihee3d"/><path class="ujrmgmblc"/><path class="obcs1cbgf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:microphone-linear"} {...others} />);
}

export default Component;
