import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i-mnlgw9n.css';
import '../../css/v/v1eutmziz.css';
import '../../css/i/i9r4wlsaa.css';
import '../../css/e/ezc732b_l.css';
import '../../css/m/mxiqd3kbh.css';
import '../../css/h/hi8rbjbpk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="i-mnlgw9n"/><path class="v1eutmziz"/><path class="i9r4wlsaa"/><path class="ezc732b_l"/><path class="mxiqd3kbh"/><path class="hi8rbjbpk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:book-open-bookmark"} {...others} />);
}

export default Component;
