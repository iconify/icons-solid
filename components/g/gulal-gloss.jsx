import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/v70bcyn7c.css';
import '../../css/c/ck67tjbal.css';
import '../../css/f/f4iuaiu1o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="v70bcyn7c wm-k"/><path class="ck67tjbal wm-a"/><path class="f4iuaiu1o wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:gulal-gloss"} {...others} />);
}

export default Component;
