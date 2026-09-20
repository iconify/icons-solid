import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k0512fcyc.css';
import '../../css/m/m1enbabxz.css';
import '../../css/o/ofz9dkbtj.css';
import '../../css/c/czi505bfc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="k0512fcyc"/><path class="m1enbabxz"/><path clip-rule="evenodd" class="ofz9dkbtj"/><path class="czi505bfc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:command-bold-duotone"} {...others} />);
}

export default Component;
