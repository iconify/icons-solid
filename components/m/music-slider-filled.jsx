import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kv8gt_bsu.css';
import '../../css/g/grgvu4bsu.css';
import '../../css/y/yy83lwb2g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="kv8gt_bsu"/><path clip-rule="evenodd" class="grgvu4bsu"/><path class="yy83lwb2g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:music-slider-filled"} {...others} />);
}

export default Component;
