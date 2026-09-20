import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nn3dqubvj.css';
import '../../css/u/uyd1zou_s.css';
import '../../css/o/owyw74eao.css';
import '../../css/s/sg2ufph9x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="nn3dqubvj"/><path class="uyd1zou_s"/><path class="owyw74eao"/><path class="sg2ufph9x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:trash-bin-trash-bold-duotone"} {...others} />);
}

export default Component;
