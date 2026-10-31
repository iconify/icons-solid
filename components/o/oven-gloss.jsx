import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/bsc8-f-sa.css';
import '../../css/j/jn4d2ebtq.css';
import '../../css/n/n90dx338s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="bsc8-f-sa wm-k"/><path class="jn4d2ebtq wm-a"/><path class="n90dx338s wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:oven-gloss"} {...others} />);
}

export default Component;
