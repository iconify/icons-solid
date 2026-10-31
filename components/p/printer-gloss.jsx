import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/roswwubvn.css';
import '../../css/z/z06pn9y-n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="roswwubvn wm-k"/><path class="wm-a z06pn9y-n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:printer-gloss"} {...others} />);
}

export default Component;
