import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/jk2fhbb9j.css';
import '../../css/b/bix8_73zd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="jk2fhbb9j wm-k"/><path class="bix8_73zd wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cloud-moon-gloss"} {...others} />);
}

export default Component;
