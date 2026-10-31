import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/l1d352bpw.css';
import '../../css/w/w77_u0byq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="l1d352bpw wm-k"/><path class="w77_u0byq wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-bear-gloss"} {...others} />);
}

export default Component;
