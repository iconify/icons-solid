import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/szd-w8b0n.css';
import '../../css/k/kimwpj-rz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="szd-w8b0n wm-k"/><path class="kimwpj-rz wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:crown-gloss"} {...others} />);
}

export default Component;
