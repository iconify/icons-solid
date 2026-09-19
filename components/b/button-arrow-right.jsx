import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/k2gijmsdy.css';
import '../../css/v/vpuht92ai.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="n1lsf0bnc"><path class="k2gijmsdy"/><path class="vpuht92ai"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:button-arrow-right"} {...others} />);
}

export default Component;
