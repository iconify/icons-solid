import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/p9t6dbowy.css';
import '../../css/f/fy7-d_5_x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="p9t6dbowy wm-k"/><path class="fy7-d_5_x wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:water-balloon-gloss"} {...others} />);
}

export default Component;
