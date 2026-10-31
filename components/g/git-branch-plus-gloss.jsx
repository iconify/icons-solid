import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/nj741ob1l.css';
import '../../css/a/aa2_prtxg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="nj741ob1l wm-k"/><path class="aa2_prtxg wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:git-branch-plus-gloss"} {...others} />);
}

export default Component;
