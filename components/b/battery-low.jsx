import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/x5vuxjmes.css';
import '../../css/t/tloje9b9b.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="n1lsf0bnc"><path class="x5vuxjmes"/><path class="tloje9b9b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:battery-low"} {...others} />);
}

export default Component;
