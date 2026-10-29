import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/f9in4npkk.css';
import '../../css/v/v__wmtb9s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="f9in4npkk"/><path class="v__wmtb9s wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:folder-tree-solid"} {...others} />);
}

export default Component;
