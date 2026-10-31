import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/arne-0rvx.css';
import '../../css/d/dhnxweb8b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="arne-0rvx wm-k"/><path class="dhnxweb8b wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:chevrons-left-gloss"} {...others} />);
}

export default Component;
