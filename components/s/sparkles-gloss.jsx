import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/pcvf36_hx.css';
import '../../css/o/opjo3bcfu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="pcvf36_hx wm-k"/><path class="opjo3bcfu wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:sparkles-gloss"} {...others} />);
}

export default Component;
