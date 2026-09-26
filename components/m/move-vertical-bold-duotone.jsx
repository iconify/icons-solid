import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cl2q-bbtk.css';
import '../../css/u/u2fps5bna.css';
import '../../css/h/hvg_2gx5s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="cl2q-bbtk"/><path class="u2fps5bna"/><path class="hvg_2gx5s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:move-vertical-bold-duotone"} {...others} />);
}

export default Component;
