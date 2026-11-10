import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dx9vp_b2e.css';
import '../../css/i/ig7og-50b.css';
import '../../css/l/lpjwmjbdt.css';
import '../../css/e/ec3q2exum.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="dx9vp_b2e"/><path class="ig7og-50b"/><circle class="lpjwmjbdt"/><path class="ec3q2exum"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:socket-square"} {...others} />);
}

export default Component;
