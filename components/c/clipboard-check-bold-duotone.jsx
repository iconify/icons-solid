import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xam49m99q.css';
import '../../css/n/n_4rvrbne.css';
import '../../css/c/c3lyyzb8p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="xam49m99q"/><path class="n_4rvrbne"/><path class="c3lyyzb8p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:clipboard-check-bold-duotone"} {...others} />);
}

export default Component;
