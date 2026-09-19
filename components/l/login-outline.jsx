import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/hnpa17iln.css';
import '../../css/p/p2z3ecb-h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="login-outline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="hnpa17iln"/><path class="p2z3ecb-h"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:login-outline"} {...others} />);
}

export default Component;
