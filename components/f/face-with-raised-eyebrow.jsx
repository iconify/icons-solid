import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c479rxbrg.css';
import '../../css/o/otit0l4ks.css';
import '../../css/r/rl84ppbeo.css';
import '../../css/c/c9mfofy0x.css';
import '../../css/l/ldit2f5kg.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="c479rxbrg"/><circle class="otit0l4ks"/><path class="rl84ppbeo"/><path class="c9mfofy0x"/><path class="ldit2f5kg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:face-with-raised-eyebrow"} {...others} />);
}

export default Component;
