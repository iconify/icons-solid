import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/s_p-mvbyc.css';
import '../../css/d/dowc8wnds.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="s_p-mvbyc"/><path class="dowc8wnds wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:laptop-solid"} {...others} />);
}

export default Component;
