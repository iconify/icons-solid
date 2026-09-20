import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/ea90dub6v.css';
import '../../css/j/jfupqcmxc.css';
import '../../css/i/ij6svbbbz.css';
import '../../css/b/bpu2-0jzs.css';
import '../../css/n/nlq80plvu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ea90dub6v"/><path class="jfupqcmxc"/><path class="ij6svbbbz"/><path class="bpu2-0jzs"/><rect class="nlq80plvu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cassette-2-line-duotone"} {...others} />);
}

export default Component;
