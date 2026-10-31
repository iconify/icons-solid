import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kevxp1n2k.css';
import '../../css/q/q0_7t1dwj.css';
import '../../css/p/prx2m6e_q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="kevxp1n2k"/><path class="q0_7t1dwj"/><path class="prx2m6e_q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"struq:clipboard"} {...others} />);
}

export default Component;
