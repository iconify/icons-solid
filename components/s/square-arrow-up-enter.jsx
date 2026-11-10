import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wz8g0mbfg.css';
import '../../css/b/byp_glq5q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="wz8g0mbfg"/><path class="byp_glq5q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:square-arrow-up-enter"} {...others} />);
}

export default Component;
