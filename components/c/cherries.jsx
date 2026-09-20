import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/exe76dt8a.css';
import '../../css/v/vu8vbdbsk.css';
import '../../css/k/kl23368kz.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="exe76dt8a"/><path class="vu8vbdbsk"/><path class="kl23368kz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:cherries"} {...others} />);
}

export default Component;
