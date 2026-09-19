import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o8k0k3bla.css';
import '../../css/w/wnley4fnf.css';
import '../../css/l/lu_0-xpbb.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="o8k0k3bla"/><path class="wnley4fnf"/><path clip-rule="evenodd" class="lu_0-xpbb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:layer-backward"} {...others} />);
}

export default Component;
