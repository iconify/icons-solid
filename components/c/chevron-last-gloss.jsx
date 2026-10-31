import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/rl-eitl3q.css';
import '../../css/v/va4gn_b8e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="rl-eitl3q wm-k"/><path class="va4gn_b8e wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:chevron-last-gloss"} {...others} />);
}

export default Component;
