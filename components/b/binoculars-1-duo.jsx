import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u_5upgzwv.css';
import '../../css/g/gxu0jib1w.css';
import '../../css/b/by412bl9y.css';
import '../../css/a/acdx52uev.css';
import '../../css/d/d0e1ubbqo.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="u_5upgzwv"/><path class="gxu0jib1w"/><path clip-rule="evenodd" class="by412bl9y"/><path class="acdx52uev"/><path class="d0e1ubbqo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:binoculars-1-duo"} {...others} />);
}

export default Component;
