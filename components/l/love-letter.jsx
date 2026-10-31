import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/l/lqd-uzb5g.css';
import '../../css/t/ti52pfbsf.css';
import '../../css/i/iwrx63bla.css';
import '../../css/x/xuxxlrbus.css';
import '../../css/n/nwoe08blf.css';
import '../../css/g/gy14dob0r.css';
import '../../css/o/oso32kb_j.css';
import '../../css/l/laityq2jb.css';
import '../../css/t/ti658bbme.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="lqd-uzb5g wm-shadow"/><path class="ti52pfbsf wm-s"/><path class="iwrx63bla wm-shadow"/><path class="xuxxlrbus"/><path class="nwoe08blf"/><path class="gy14dob0r"/><path class="oso32kb_j wm-s"/><path class="laityq2jb wm-s"/><path class="ti658bbme wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:love-letter"} {...others} />);
}

export default Component;
