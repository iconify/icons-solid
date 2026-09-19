import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/t/t0baxibkh.css';
import '../../css/m/mdjx2zbma.css';
import '../../css/w/w8m--pb8p.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s9cl3zbei"><path clip-rule="evenodd" class="t0baxibkh"/><path class="mdjx2zbma"/><path class="w8m--pb8p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:traditional-chinese-medicine"} {...others} />);
}

export default Component;
