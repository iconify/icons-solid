import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/fy7hect6f.css';
import '../../css/j/jf5d48bwz.css';
import '../../css/z/z_ttpkb1m.css';

const viewBox = {"width":20,"height":20};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="fy7hect6f"/><path class="jf5d48bwz"/><path class="z_ttpkb1m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:arrow-down-left"} {...others} />);
}

export default Component;
