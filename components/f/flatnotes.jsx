import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r0lmw93xt.css';
import '../../css/a/agsogrbvx.css';
import '../../css/z/zim7z5jii.css';

const viewBox = {"width":197,"height":44};
const content = `<g class="ft5dv1b6b"><rect class="r0lmw93xt"/><path class="agsogrbvx"/><path class="zim7z5jii"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:flatnotes"} {...others} />);
}

export default Component;
