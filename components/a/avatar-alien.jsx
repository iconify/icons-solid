import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/y/y-a8ssohu.css';
import '../../css/q/q7neo10ld.css';
import '../../css/p/pnt-r2bvl.css';
import '../../css/m/m44piaclc.css';
import '../../css/i/ivq625pkq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="wm-shadow y-a8ssohu"/><path class="q7neo10ld wm-shadow"/><path class="pnt-r2bvl"/><path class="m44piaclc"/><path class="ivq625pkq wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:avatar-alien"} {...others} />);
}

export default Component;
