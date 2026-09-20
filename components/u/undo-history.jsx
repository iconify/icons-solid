import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/g/ge_-4ubim.css';
import '../../css/n/n2h6fyjip.css';
import '../../css/l/l4j1qrodv.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="bi12bsetm"><path class="ge_-4ubim"/><path class="n2h6fyjip"/><path class="l4j1qrodv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:undo-history"} {...others} />);
}

export default Component;
