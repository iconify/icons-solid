import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vacgxwbuv.css';
import '../../css/q/qfh2rne1z.css';

const viewBox = {"width":301,"height":201};
const content = `<g class="ft5dv1b6b"><path class="vacgxwbuv"/><path class="qfh2rne1z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:cn"} {...others} />);
}

export default Component;
