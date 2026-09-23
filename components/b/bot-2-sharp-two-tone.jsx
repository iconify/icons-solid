import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/h/h5v13_bfu.css';
import '../../css/t/tx_ah59as.css';
import '../../css/l/lvsowdyvi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="h5v13_bfu"/><path class="tx_ah59as"/><path class="lvsowdyvi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:bot-2-sharp-two-tone"} {...others} />);
}

export default Component;
