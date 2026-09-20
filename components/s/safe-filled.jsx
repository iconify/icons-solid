import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i5jzghb3e.css';
import '../../css/u/um-4_bc_j.css';
import '../../css/n/n1c7bqrrb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="i5jzghb3e"/><path clip-rule="evenodd" class="um-4_bc_j"/><path clip-rule="evenodd" class="n1c7bqrrb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:safe-filled"} {...others} />);
}

export default Component;
