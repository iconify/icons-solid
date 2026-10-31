import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/uh9oejbxr.css';
import '../../css/j/jc1xe6sxm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="uh9oejbxr wm-k"/><path class="jc1xe6sxm wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:sailboat-gloss"} {...others} />);
}

export default Component;
