import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/k0111cchf.css';
import '../../css/x/xa58q1izi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="k0111cchf wm-k"/><path class="wm-s xa58q1izi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:mail-warning-gloss"} {...others} />);
}

export default Component;
