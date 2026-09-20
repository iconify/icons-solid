import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e82tsabvb.css';
import '../../css/w/wlil-ulli.css';
import '../../css/d/d97lzreei.css';
import '../../css/r/rr0sjmbdt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="e82tsabvb"/><path class="wlil-ulli"/><path class="d97lzreei"/><path class="rr0sjmbdt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:ice-cream"} {...others} />);
}

export default Component;
