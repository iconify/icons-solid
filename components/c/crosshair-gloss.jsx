import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/kxe6t8brf.css';
import '../../css/j/j34sv2b_g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="kxe6t8brf wm-k"/><path class="j34sv2b_g wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:crosshair-gloss"} {...others} />);
}

export default Component;
