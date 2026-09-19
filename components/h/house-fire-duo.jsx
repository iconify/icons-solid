import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i793flwcp.css';
import '../../css/u/uejg4q-3x.css';
import '../../css/v/vwqgwrb7v.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="i793flwcp"/><path class="uejg4q-3x"/><path class="vwqgwrb7v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:house-fire-duo"} {...others} />);
}

export default Component;
