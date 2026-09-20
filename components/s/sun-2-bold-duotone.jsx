import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kz_jmngoy.css';
import '../../css/m/maoj1wb9q.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/i/isjs2mp8q.css';
import '../../css/u/uag-dxbwf.css';
import '../../css/j/jm8-sxbet.css';
import '../../css/u/ule-b-vrh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="kz_jmngoy"/><path clip-rule="evenodd" class="maoj1wb9q"/><g class="mc2zb0bvp"><path class="isjs2mp8q"/><path class="uag-dxbwf"/><path class="jm8-sxbet"/><path class="ule-b-vrh"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sun-2-bold-duotone"} {...others} />);
}

export default Component;
