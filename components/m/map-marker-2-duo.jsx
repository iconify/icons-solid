import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jkte7ebxp.css';
import '../../css/n/nmbjg4b9a.css';
import '../../css/j/jreojobjh.css';
import '../../css/k/k1vam0gdh.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="jkte7ebxp"/><path class="nmbjg4b9a"/><path class="jreojobjh"/><path class="k1vam0gdh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:map-marker-2-duo"} {...others} />);
}

export default Component;
