import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/s/sd5y_0n2e.css';
import '../../css/g/gqtvblinr.css';
import '../../css/z/zhb7fx7pa.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="jtowsomii"><path class="sd5y_0n2e"/><path class="gqtvblinr"/><path class="zhb7fx7pa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:cubes"} {...others} />);
}

export default Component;
