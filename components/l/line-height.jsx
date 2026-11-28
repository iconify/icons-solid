import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/s_ftu2boq.css';
import '../../css/c/cn4sghbee.css';
import '../../css/d/dyygccboq.css';
import '../../css/h/h6beyiu9w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="s_ftu2boq"/><path class="cn4sghbee"/><path class="dyygccboq"/><path class="h6beyiu9w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:line-height"} {...others} />);
}

export default Component;
