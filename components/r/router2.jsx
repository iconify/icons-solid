import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zyr2z0cpz.css';
import '../../css/b/bhcv8nimm.css';
import '../../css/x/xxaranb8j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="zyr2z0cpz"/><path class="bhcv8nimm"/><path clip-rule="evenodd" class="xxaranb8j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:router2"} {...others} />);
}

export default Component;
