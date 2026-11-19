import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bl7nbhbyz.css';
import '../../css/b/b1vvirfgs.css';
import '../../css/q/qrfu-jtve.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="bl7nbhbyz"/><path class="b1vvirfgs"/><path class="qrfu-jtve"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:experiment-minus"} {...others} />);
}

export default Component;
