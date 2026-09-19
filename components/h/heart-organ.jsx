import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gmal50bys.css';
import '../../css/m/m_v4gut-x.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="gmal50bys"/><path class="m_v4gut-x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:heart-organ"} {...others} />);
}

export default Component;
