import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qpzepbxoc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/z/zbke2mcmt.css';
import '../../css/o/oj410s8yw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="qpzepbxoc"/><g class="mc2zb0bvp"><path class="zbke2mcmt"/><path class="oj410s8yw"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sleeping-bold-duotone"} {...others} />);
}

export default Component;
