import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ie5jj8_jh.css';
import '../../css/g/gafy37gmj.css';
import '../../css/t/tbw_k9bpn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ie5jj8_jh"/><path class="gafy37gmj"/><path clip-rule="evenodd" class="tbw_k9bpn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:card-receive-bold"} {...others} />);
}

export default Component;
