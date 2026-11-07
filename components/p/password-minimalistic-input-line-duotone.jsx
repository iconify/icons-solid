import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/fyfy6w7oj.css';
import '../../css/o/om4lnzbpu.css';
import '../../css/n/nliya7x_y.css';
import '../../css/f/fkmuctbdy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="fyfy6w7oj"/><path class="om4lnzbpu"/><path class="nliya7x_y"/><path class="fkmuctbdy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:password-minimalistic-input-line-duotone"} {...others} />);
}

export default Component;
