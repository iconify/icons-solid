import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jd8hznqdc.css';
import '../../css/z/zs5_5_csw.css';
import '../../css/m/mud-36bku.css';
import '../../css/b/b--zx2sbj.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="jd8hznqdc"/><rect class="zs5_5_csw"/><path clip-rule="evenodd" class="mud-36bku"/><path class="b--zx2sbj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:images"} {...others} />);
}

export default Component;
