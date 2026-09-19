import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pajftwqsn.css';
import '../../css/s/s9c5dfbyd.css';
import '../../css/t/tny-dy4ya.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="pajftwqsn"/><path clip-rule="evenodd" class="s9c5dfbyd"/><path clip-rule="evenodd" class="tny-dy4ya"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:diagnostics"} {...others} />);
}

export default Component;
