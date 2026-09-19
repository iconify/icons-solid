import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vaowlwbvb.css';
import '../../css/z/zac5-7ixl.css';
import '../../css/v/vtw6x8oeg.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="n1lsf0bnc"><path class="vaowlwbvb"/><path class="zac5-7ixl"/><path class="vtw6x8oeg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:socket"} {...others} />);
}

export default Component;
