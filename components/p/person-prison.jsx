import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/e7hr_ub1p.css';
import '../../css/y/yt0q85bbz.css';
import '../../css/u/u4vdnnute.css';

const viewBox = {"width":17,"height":17};
const content = `<g class="n1lsf0bnc"><path class="e7hr_ub1p"/><path class="yt0q85bbz"/><path class="u4vdnnute"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:person-prison"} {...others} />);
}

export default Component;
