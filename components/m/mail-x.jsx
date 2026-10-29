import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/o/ognfdrb1e.css';
import '../../css/d/d4-92dm9n.css';
import '../../css/u/uty5c9-8e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="ognfdrb1e wm-k"/><path class="d4-92dm9n"/><path class="uty5c9-8e wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:mail-x"} {...others} />);
}

export default Component;
