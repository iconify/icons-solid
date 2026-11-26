import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j-npdpb0r.css';
import '../../css/y/ycfs5r48t.css';
import '../../css/i/i-s49165o.css';

const viewBox = {"width":512,"height":512};
const content = `<g class="j-npdpb0r"><path class="ycfs5r48t"/><path class="i-s49165o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"xero-emoji:speech-balloon"} {...others} />);
}

export default Component;
