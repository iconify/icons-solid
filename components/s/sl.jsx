import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w49i3xbiz.css';
import '../../css/f/f9osy1x0y.css';
import '../../css/i/iw2i09btv.css';

const viewBox = {"width":301,"height":201};
const content = `<g class="ft5dv1b6b"><path class="w49i3xbiz"/><path class="f9osy1x0y"/><path class="iw2i09btv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:sl"} {...others} />);
}

export default Component;
