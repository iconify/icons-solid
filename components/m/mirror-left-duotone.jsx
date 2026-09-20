import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/feasg7mlx.css';
import '../../css/m/mscw0t_je.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="feasg7mlx"/><path clip-rule="evenodd" class="mscw0t_je"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:mirror-left-duotone"} {...others} />);
}

export default Component;
