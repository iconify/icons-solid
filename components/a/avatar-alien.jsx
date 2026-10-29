import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/q/q6bh5bczb.css';
import '../../css/e/egfbtabll.css';
import '../../css/v/vzlygkbrz.css';
import '../../css/o/ovlo2xbrs.css';
import '../../css/t/thhyn7bwu.css';
import '../../css/n/nek6nub6v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="q6bh5bczb wm-k"/><path class="egfbtabll wm-a"/><path class="vzlygkbrz wm-k"/><path class="ovlo2xbrs"/><path class="thhyn7bwu"/><path class="nek6nub6v wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:avatar-alien"} {...others} />);
}

export default Component;
