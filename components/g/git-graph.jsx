import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/q/qn_8dxb9v.css';
import '../../css/q/qjx4q3b5l.css';
import '../../css/b/bv_q14-ra.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="qn_8dxb9v wm-shadow"/><path class="qjx4q3b5l wm-shadow"/><path class="bv_q14-ra"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:git-graph"} {...others} />);
}

export default Component;
