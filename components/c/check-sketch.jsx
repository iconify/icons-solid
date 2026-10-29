import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/z/zdvk1cdlk.css';
import '../../css/f/f6cn_17np.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="zdvk1cdlk"/><path class="f6cn_17np"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:check-sketch"} {...others} />);
}

export default Component;
