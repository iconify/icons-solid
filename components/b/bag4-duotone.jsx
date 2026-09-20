import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yeus-7b3d.css';
import '../../css/b/bac0--bit.css';
import '../../css/a/arl-0jb6o.css';
import '../../css/s/svbwzm6_b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="yeus-7b3d"/><circle class="bac0--bit"/><circle class="arl-0jb6o"/><path class="svbwzm6_b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:bag4-duotone"} {...others} />);
}

export default Component;
