import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rhl8btbnt.css';
import '../../css/b/bdsyk5b6o.css';
import '../../css/h/h-tc3zb4v.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="rhl8btbnt"/><path class="bdsyk5b6o"/><path class="h-tc3zb4v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:loveseat-duo"} {...others} />);
}

export default Component;
