import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/u/u0nfmxh_m.css';
import '../../css/b/b9opflstk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="u0nfmxh_m"/><path class="b9opflstk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:bracket-arrow-up-sharp-two-tone"} {...others} />);
}

export default Component;
