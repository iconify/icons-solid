import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/s/szn17mbfx.css';
import '../../css/a/asht2jpqx.css';
import '../../css/b/bzvpj4gsv.css';
import '../../css/q/q2qfo-bxq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="szn17mbfx wm-shadow"/><path class="asht2jpqx"/><path class="bzvpj4gsv"/><path class="q2qfo-bxq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:sprout"} {...others} />);
}

export default Component;
