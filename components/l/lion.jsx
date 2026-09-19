import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l8oli-e-g.css';
import '../../css/n/nf2-fkbdx.css';
import '../../css/v/v9vsj_bvv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="l8oli-e-g"/><path clip-rule="evenodd" class="nf2-fkbdx"/><path clip-rule="evenodd" class="v9vsj_bvv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:lion"} {...others} />);
}

export default Component;
