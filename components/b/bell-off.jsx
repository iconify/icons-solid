import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r_l4jyzdi.css';
import '../../css/m/ml556acti.css';
import '../../css/s/s9m_gjbne.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="r_l4jyzdi"/><path clip-rule="evenodd" class="ml556acti"/><path class="s9m_gjbne"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:bell-off"} {...others} />);
}

export default Component;
