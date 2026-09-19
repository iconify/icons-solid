import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/p/pnt4g603j.css';
import '../../css/l/llko_jr5u.css';
import '../../css/k/k4xzy-b1d.css';
import '../../css/c/cv-_ylbeb.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="pnt4g603j"/><path class="llko_jr5u"/><path class="k4xzy-b1d"/><path class="cv-_ylbeb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:rain-1-outline"} {...others} />);
}

export default Component;
