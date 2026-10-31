import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/af8ke863m.css';
import '../../css/r/rg3xj6out.css';
import '../../css/v/vyb-tzbpg.css';
import '../../css/b/bo1pywb9h.css';
import '../../css/g/gxmf5vbqk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="af8ke863m wm-shadow"/><path class="rg3xj6out"/><path class="vyb-tzbpg"/><path class="bo1pywb9h"/><path class="gxmf5vbqk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:clover"} {...others} />);
}

export default Component;
