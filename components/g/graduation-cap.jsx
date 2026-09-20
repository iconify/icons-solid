import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i-_4k2qhq.css';
import '../../css/g/gfm_mc64v.css';
import '../../css/l/lzfphrbkl.css';
import '../../css/u/ug1h7unws.css';
import '../../css/l/l1nv2jw8y.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="i-_4k2qhq"/><path class="gfm_mc64v"/><path class="lzfphrbkl"/><path class="ug1h7unws"/><path class="l1nv2jw8y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:graduation-cap"} {...others} />);
}

export default Component;
