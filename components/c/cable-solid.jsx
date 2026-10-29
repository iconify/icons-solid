import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/j84z6abwo.css';
import '../../css/j/j-wtijbhi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="j84z6abwo"/><path class="j-wtijbhi wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cable-solid"} {...others} />);
}

export default Component;
