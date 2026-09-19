import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/krd41pbpp.css';
import '../../css/u/u2lu0e3iz.css';
import '../../css/w/ws4qkkash.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="krd41pbpp"/><path class="u2lu0e3iz"/><path class="ws4qkkash"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:night-duo"} {...others} />);
}

export default Component;
