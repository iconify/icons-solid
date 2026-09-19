import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eevzplfhc.css';
import '../../css/b/bljinvb-u.css';
import '../../css/o/ott5z94di.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="eevzplfhc"/><path class="bljinvb-u"/><path class="ott5z94di"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:star-half-2-bold"} {...others} />);
}

export default Component;
