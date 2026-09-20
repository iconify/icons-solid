import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/ea90dub6v.css';
import '../../css/i/ij6svbbbz.css';
import '../../css/b/bpu2-0jzs.css';
import '../../css/j/jiw1pkbmf.css';
import '../../css/g/gt5w69btr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ea90dub6v"/><path class="ij6svbbbz"/><path class="bpu2-0jzs"/><path class="jiw1pkbmf"/><path class="gt5w69btr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cassette-line-duotone"} {...others} />);
}

export default Component;
