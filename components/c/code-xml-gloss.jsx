import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/oolm50qey.css';
import '../../css/i/i6b18tbos.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="oolm50qey wm-k"/><path class="i6b18tbos wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:code-xml-gloss"} {...others} />);
}

export default Component;
