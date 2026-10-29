import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/x/x7wu1fbdv.css';
import '../../css/f/fnsq8wbds.css';
import '../../css/a/ayhs6pbko.css';
import '../../css/l/lrbbx9b6x.css';
import '../../css/j/je2qscbwo.css';
import '../../css/d/da8zwfb5x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="wm-deco x7wu1fbdv"/><path class="fnsq8wbds wm-deco"/><path class="ayhs6pbko wm-deco"/><path class="lrbbx9b6x wm-k"/><path class="je2qscbwo wm-a"/><path class="da8zwfb5x wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:fan-blueprint"} {...others} />);
}

export default Component;
