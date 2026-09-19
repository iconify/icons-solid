import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/e7enxrbua.css';
import '../../css/i/i0-tdxm2y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="e7enxrbua"/><path class="i0-tdxm2y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:mail-open"} {...others} />);
}

export default Component;
