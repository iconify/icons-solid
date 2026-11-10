import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/f/fm-rif3xk.css';
import '../../css/i/idvo9fb6s.css';
import '../../css/w/w9l6ldbso.css';
import '../../css/o/ofme4dblq.css';
import '../../css/b/b92mmibeq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="fm-rif3xk"/><path class="idvo9fb6s"/><path class="w9l6ldbso"/><path class="ofme4dblq"/><path class="b92mmibeq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:food-menu"} {...others} />);
}

export default Component;
