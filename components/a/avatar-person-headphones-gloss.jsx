import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/k7uif1ocp.css';
import '../../css/y/y-68b4omw.css';
import '../../css/a/aaabqvvyv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="k7uif1ocp wm-k"/><path class="wm-a y-68b4omw"/><path class="aaabqvvyv wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-person-headphones-gloss"} {...others} />);
}

export default Component;
