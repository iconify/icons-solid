import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/scqab7b7u.css';
import '../../css/j/jypo_3e0n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="scqab7b7u wm-k"/><path class="jypo_3e0n wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:link-gloss"} {...others} />);
}

export default Component;
