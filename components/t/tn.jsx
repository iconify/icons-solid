import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fjdlmqb_x.css';
import '../../css/h/h27bu91mp.css';
import '../../css/j/j03b64icf.css';
import '../../css/m/m83y9jlqd.css';
import '../../css/e/eei69lyyc.css';

const viewBox = {"width":301,"height":201};
const content = `<g class="ft5dv1b6b"><path class="fjdlmqb_x"/><circle class="h27bu91mp"/><circle class="j03b64icf"/><circle class="m83y9jlqd"/><path class="eei69lyyc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:tn"} {...others} />);
}

export default Component;
