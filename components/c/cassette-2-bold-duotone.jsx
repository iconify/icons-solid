import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/k/ks437p30h.css';
import '../../css/j/j2h3oeb3y.css';
import '../../css/i/ifudv-kiz.css';
import '../../css/e/e0n5bhk-x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="ks437p30h"/><path class="j2h3oeb3y"/><path class="ifudv-kiz"/></g><path clip-rule="evenodd" class="e0n5bhk-x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cassette-2-bold-duotone"} {...others} />);
}

export default Component;
