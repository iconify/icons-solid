import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/q00u_9bvq.css';
import '../../css/e/elosu8b4y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="q00u_9bvq wm-k"/><path class="elosu8b4y wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:rose-gloss"} {...others} />);
}

export default Component;
