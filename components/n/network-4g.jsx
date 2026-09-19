import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rq8-a0mee.css';
import '../../css/p/p4t6pzb9a.css';
import '../../css/p/p336-qurv.css';
import '../../css/q/qamrqtb4e.css';
import '../../css/a/a8h210bci.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="rq8-a0mee"/><path clip-rule="evenodd" class="p4t6pzb9a"/><path clip-rule="evenodd" class="p336-qurv"/><path class="qamrqtb4e"/><path clip-rule="evenodd" class="a8h210bci"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:network-4g"} {...others} />);
}

export default Component;
