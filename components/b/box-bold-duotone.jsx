import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wj6b-6x4m.css';
import '../../css/x/xmklcqbxd.css';
import '../../css/j/jo-cfdc1z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="wj6b-6x4m"/><path class="xmklcqbxd"/><path class="jo-cfdc1z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:box-bold-duotone"} {...others} />);
}

export default Component;
