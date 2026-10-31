import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/kem0vpb6y.css';
import '../../css/n/nfei5bb7c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="kem0vpb6y wm-k"/><path class="nfei5bb7c wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:soup-gloss"} {...others} />);
}

export default Component;
