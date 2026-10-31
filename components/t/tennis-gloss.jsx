import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/c3ipag9wm.css';
import '../../css/s/sfci3xnmy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="c3ipag9wm wm-k"/><path class="sfci3xnmy wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:tennis-gloss"} {...others} />);
}

export default Component;
