import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sei3qab8x.css';
import '../../css/f/f23ximbyn.css';
import '../../css/i/iy0e64bfz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><rect class="sei3qab8x"/><path clip-rule="evenodd" class="f23ximbyn"/><path class="iy0e64bfz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gg:today"} {...others} />);
}

export default Component;
