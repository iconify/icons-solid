import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/l9c9fffco.css';
import '../../css/h/h8-xogl2u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="l9c9fffco wm-k"/><path class="h8-xogl2u wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:chart-scatter-gloss"} {...others} />);
}

export default Component;
