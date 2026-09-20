import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xxgpzthix.css';
import '../../css/q/qdu2ikb6x.css';
import '../../css/v/vpdfj1bpy.css';
import '../../css/l/l1drn8msz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="xxgpzthix"/><path class="qdu2ikb6x"/><path class="vpdfj1bpy"/><path class="l1drn8msz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:skirt-bold"} {...others} />);
}

export default Component;
