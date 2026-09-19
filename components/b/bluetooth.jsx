import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/i9b40_bso.css';
import '../../css/b/bosd9bbuc.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="n1lsf0bnc"><path class="i9b40_bso"/><path class="bosd9bbuc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:bluetooth"} {...others} />);
}

export default Component;
