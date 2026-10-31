import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/a7-kdcf7f.css';
import '../../css/j/j2n55dbec.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="a7-kdcf7f wm-k"/><path class="j2n55dbec wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:layers-gloss"} {...others} />);
}

export default Component;
