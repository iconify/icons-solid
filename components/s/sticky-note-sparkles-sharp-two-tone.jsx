import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/w/w33rvnbme.css';
import '../../css/w/w575o1bvn.css';
import '../../css/c/currik_tu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="w33rvnbme"/><path class="w575o1bvn"/><path class="currik_tu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:sticky-note-sparkles-sharp-two-tone"} {...others} />);
}

export default Component;
