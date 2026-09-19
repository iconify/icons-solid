import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ifw9_u73n.css';
import '../../css/q/qa6etfrcv.css';
import '../../css/i/i-awu_zpx.css';

const viewBox = {"width":301,"height":181};
const content = `<g class="ft5dv1b6b"><path class="ifw9_u73n"/><path class="qa6etfrcv"/><path class="i-awu_zpx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:lt"} {...others} />);
}

export default Component;
