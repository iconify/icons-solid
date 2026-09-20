import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gv7hrvi9x.css';
import '../../css/k/k83ygvv2n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="gv7hrvi9x"/><path class="k83ygvv2n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mi:tablet"} {...others} />);
}

export default Component;
