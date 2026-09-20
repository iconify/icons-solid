import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dx06mcbrw.css';
import '../../css/u/unkgs_bxd.css';
import '../../css/y/ykd7i77fc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="dx06mcbrw"/><path class="unkgs_bxd"/><path class="ykd7i77fc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:test-tube-minimalistic-bold-duotone"} {...others} />);
}

export default Component;
