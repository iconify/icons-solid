import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/jk8uwv8me.css';
import '../../css/t/ti8dtnclf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="jk8uwv8me wm-k"/><path class="ti8dtnclf wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:list-ordered-gloss"} {...others} />);
}

export default Component;
