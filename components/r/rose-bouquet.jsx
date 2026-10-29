import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/e/ep9p02b8a.css';
import '../../css/q/q2izz5bce.css';
import '../../css/l/likqfxbjy.css';
import '../../css/l/l4sh7abkj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="ep9p02b8a wm-k"/><path class="q2izz5bce wm-a"/><path class="likqfxbjy"/><path class="l4sh7abkj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:rose-bouquet"} {...others} />);
}

export default Component;
