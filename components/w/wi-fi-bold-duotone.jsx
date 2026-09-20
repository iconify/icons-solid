import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/v/v7ty67bvl.css';
import '../../css/k/ko_-62ycd.css';
import '../../css/n/nxgn35i8k.css';
import '../../css/w/wcswsybcz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="v7ty67bvl"/><path class="ko_-62ycd"/><path class="nxgn35i8k"/></g><path class="wcswsybcz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:wi-fi-bold-duotone"} {...others} />);
}

export default Component;
