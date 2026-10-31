import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/mv0f8nmex.css';
import '../../css/y/yzwv1_uwo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="mv0f8nmex wm-k"/><path class="wm-a yzwv1_uwo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:indent-decrease-gloss"} {...others} />);
}

export default Component;
