import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/esoi5lsmz.css';
import '../../css/e/e_4-k9bih.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="esoi5lsmz"/><path class="e_4-k9bih"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:music-playlist-filled"} {...others} />);
}

export default Component;
