import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r4dd6nbsr.css';
import '../../css/x/xxijo_twl.css';
import '../../css/w/w5cem9faf.css';

const viewBox = {"width":301,"height":201};
const content = `<g class="ft5dv1b6b"><path class="r4dd6nbsr"/><path class="xxijo_twl"/><path class="w5cem9faf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:bw"} {...others} />);
}

export default Component;
