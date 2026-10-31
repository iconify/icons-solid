import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/ch5o8ji5y.css';
import '../../css/i/i6wt9mqpo.css';
import '../../css/t/tp_uxaccm.css';
import '../../css/g/g24zvbbah.css';
import '../../css/w/wgrxp0g-k.css';

const viewBox = {"width":301,"height":151};
const content = `<g class="ft5dv1b6b"><path class="ch5o8ji5y"/><path class="i6wt9mqpo"/><path class="tp_uxaccm"/><circle class="g24zvbbah"/><path class="wgrxp0g-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:kp"} {...others} />);
}

export default Component;
