import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bjxiymbnw.css';
import '../../css/r/rot_1zzym.css';
import '../../css/p/pvo0_mbip.css';
import '../../css/c/c73t34bfn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="bjxiymbnw"/><path class="rot_1zzym"/><path clip-rule="evenodd" class="pvo0_mbip"/><path class="c73t34bfn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:file-user-bold"} {...others} />);
}

export default Component;
