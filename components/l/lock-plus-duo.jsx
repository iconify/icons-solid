import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e8qn0jbck.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/i71m81irf.css';
import '../../css/d/didesjkug.css';
import '../../css/n/n5j9s2_ic.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e8qn0jbck secondary"/><g class="dt0cm9dhy primary"><path class="i71m81irf"/><path class="didesjkug"/><path class="n5j9s2_ic"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:lock-plus-duo"} {...others} />);
}

export default Component;
