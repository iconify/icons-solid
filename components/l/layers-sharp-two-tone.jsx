import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/a/azy15lbvn.css';
import '../../css/v/ve3m53b2x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="azy15lbvn"/><path class="ve3m53b2x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:layers-sharp-two-tone"} {...others} />);
}

export default Component;
