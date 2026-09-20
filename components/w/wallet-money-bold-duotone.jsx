import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e1reemjkj.css';
import '../../css/a/ak4yf0bmi.css';
import '../../css/a/a7j-njlvn.css';
import '../../css/r/rpm4gcb5e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="e1reemjkj"/><path class="ak4yf0bmi"/><path class="a7j-njlvn"/><path class="rpm4gcb5e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:wallet-money-bold-duotone"} {...others} />);
}

export default Component;
