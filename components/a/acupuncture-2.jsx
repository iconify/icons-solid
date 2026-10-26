import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yy16ft5rm.css';
import '../../css/m/m_3jpfb9x.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="yy16ft5rm"/><path class="m_3jpfb9x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:acupuncture-2"} {...others} />);
}

export default Component;
