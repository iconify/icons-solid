import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xupi7pbch.css';
import '../../css/p/pdl1bhbxu.css';
import '../../css/l/l4cuvtbmt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="xupi7pbch"/><path clip-rule="evenodd" class="pdl1bhbxu"/><path class="l4cuvtbmt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:video-play-h-filled"} {...others} />);
}

export default Component;
