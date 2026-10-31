import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/jdei3kbqy.css';
import '../../css/c/cmsy4r7px.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="jdei3kbqy wm-k"/><path class="cmsy4r7px wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:binary-gloss"} {...others} />);
}

export default Component;
