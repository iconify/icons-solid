import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/phqj-abvm.css';
import '../../css/n/nr1ilxf-o.css';
import '../../css/y/y_974tt6h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="phqj-abvm"/><path class="nr1ilxf-o"/><path class="y_974tt6h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:slides-thumbnails"} {...others} />);
}

export default Component;
