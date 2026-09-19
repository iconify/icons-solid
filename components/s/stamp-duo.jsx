import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d3_2_6jzi.css';
import '../../css/e/e8ud69wmt.css';
import '../../css/l/lkfkt8bbq.css';
import '../../css/f/fydgi61ch.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="d3_2_6jzi"/><path class="e8ud69wmt"/><path class="lkfkt8bbq"/><path class="fydgi61ch"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:stamp-duo"} {...others} />);
}

export default Component;
