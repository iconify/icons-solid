import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/feia55onp.css';
import '../../css/l/l5_3ncj5c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="feia55onp wm-k"/><path class="l5_3ncj5c wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:satellite-dish-gloss"} {...others} />);
}

export default Component;
