import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/cbs_iv3-v.css';
import '../../css/x/xp8jk5b2k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="cbs_iv3-v wm-k"/><path class="wm-a xp8jk5b2k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:pencil-ruler-gloss"} {...others} />);
}

export default Component;
