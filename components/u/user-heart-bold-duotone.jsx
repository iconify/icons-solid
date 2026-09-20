import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mrbdum0dm.css';
import '../../css/y/y8iajdbqc.css';
import '../../css/f/fiqva46sa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="mrbdum0dm"/><path class="y8iajdbqc"/><path class="fiqva46sa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:user-heart-bold-duotone"} {...others} />);
}

export default Component;
