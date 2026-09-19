import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/px-esybhj.css';
import '../../css/d/dfe4kif3r.css';
import '../../css/r/ryfrf6boi.css';
import '../../css/u/u9w53hb0y.css';
import '../../css/u/ujxcgg70e.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="px-esybhj"/><path class="dfe4kif3r"/><path class="ryfrf6boi"/><path class="u9w53hb0y"/><path class="ujxcgg70e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:backpack"} {...others} />);
}

export default Component;
