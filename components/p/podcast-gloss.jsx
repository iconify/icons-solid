import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/pugvlo1xx.css';
import '../../css/p/p8q_si8uy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="pugvlo1xx wm-k"/><path class="p8q_si8uy wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:podcast-gloss"} {...others} />);
}

export default Component;
