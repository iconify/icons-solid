import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/wnip7db9k.css';
import '../../css/c/c30drv6-g.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="n1lsf0bnc"><path class="wnip7db9k"/><path class="c30drv6-g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:layout-1"} {...others} />);
}

export default Component;
