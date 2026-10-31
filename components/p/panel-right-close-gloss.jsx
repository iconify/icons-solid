import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/rrj1kby_k.css';
import '../../css/t/t3y5xxluy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="rrj1kby_k wm-k"/><path class="t3y5xxluy wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:panel-right-close-gloss"} {...others} />);
}

export default Component;
