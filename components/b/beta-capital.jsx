import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/b/bf5jahb7c.css';
import '../../css/n/n97qcj3ul.css';
import '../../css/j/jto0csbfb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="bf5jahb7c"/><path class="n97qcj3ul"/><path class="jto0csbfb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:beta-capital"} {...others} />);
}

export default Component;
