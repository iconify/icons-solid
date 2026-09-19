import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/e575b_egr.css';
import '../../css/p/pod4q383v.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="n1lsf0bnc"><path class="e575b_egr"/><path class="pod4q383v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:backward-page"} {...others} />);
}

export default Component;
