import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oy91z3bge.css';
import '../../css/s/smi0jlb_g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="oy91z3bge"/><path clip-rule="evenodd" class="smi0jlb_g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:cart4"} {...others} />);
}

export default Component;
