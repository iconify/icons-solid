import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/u9sptzr_f.css';
import '../../css/w/wfd123b6b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="u9sptzr_f"/><path class="wfd123b6b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:touch-locked-03"} {...others} />);
}

export default Component;
