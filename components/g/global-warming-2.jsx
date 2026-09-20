import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/n/nvj3ewbsi.css';
import '../../css/l/ll4xltmbe.css';
import '../../css/o/oytdpybsc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="nvj3ewbsi"/><path class="ll4xltmbe"/><path class="oytdpybsc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:global-warming-2"} {...others} />);
}

export default Component;
