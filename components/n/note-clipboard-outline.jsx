import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zqhz5k-uj.css';
import '../../css/i/ivehi5u4g.css';
import '../../css/a/a0-uj79up.css';
import '../../css/q/qhecqmane.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="zqhz5k-uj"/><path clip-rule="evenodd" class="ivehi5u4g"/><path class="a0-uj79up"/><path clip-rule="evenodd" class="qhecqmane"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:note-clipboard-outline"} {...others} />);
}

export default Component;
