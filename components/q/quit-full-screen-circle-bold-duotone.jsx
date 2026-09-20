import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yp54sytzi.css';
import '../../css/u/uy3_f8bob.css';
import '../../css/h/hbnyeyb7b.css';
import '../../css/g/g_zn-7vml.css';
import '../../css/b/bxc0gtbxt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="yp54sytzi"/><path class="uy3_f8bob"/><path class="hbnyeyb7b"/><path class="g_zn-7vml"/><path class="bxc0gtbxt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:quit-full-screen-circle-bold-duotone"} {...others} />);
}

export default Component;
