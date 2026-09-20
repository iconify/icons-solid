import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u6wrotqxc.css';
import '../../css/n/n_0bxbb_l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="u6wrotqxc"/><path class="n_0bxbb_l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:escalator-up-filled"} {...others} />);
}

export default Component;
