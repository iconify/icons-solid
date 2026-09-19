import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/aodmvnbdv.css';
import '../../css/e/e5ydtbcjv.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="n1lsf0bnc"><path class="aodmvnbdv"/><path class="e5ydtbcjv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:wrench-screwdriver"} {...others} />);
}

export default Component;
