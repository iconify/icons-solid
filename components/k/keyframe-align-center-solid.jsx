import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h-l1pd0_w.css';
import '../../css/m/m7zxsgbcu.css';
import '../../css/x/xg7awccao.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h-l1pd0_w"><path class="m7zxsgbcu"/><path clip-rule="evenodd" class="xg7awccao"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:keyframe-align-center-solid"} {...others} />);
}

export default Component;
