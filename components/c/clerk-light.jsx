import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qgykhgyqv.css';
import '../../css/t/txb2yy2ma.css';
import '../../css/e/ebco1zmpc.css';

const viewBox = {"width":128,"height":128};
const content = `<g class="ft5dv1b6b"><circle class="qgykhgyqv"/><path class="txb2yy2ma"/><path class="ebco1zmpc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:clerk-light"} {...others} />);
}

export default Component;
