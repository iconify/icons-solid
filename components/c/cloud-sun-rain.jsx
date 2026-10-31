import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/j/jmg13wbru.css';
import '../../css/b/bem2mjb-b.css';
import '../../css/v/valjopeza.css';
import '../../css/b/bpz3ipbwd.css';
import '../../css/p/pm7ea1b_q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="jmg13wbru wm-shadow"/><path class="bem2mjb-b wm-shadow"/><path class="valjopeza"/><path class="bpz3ipbwd"/><path class="pm7ea1b_q wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:cloud-sun-rain"} {...others} />);
}

export default Component;
