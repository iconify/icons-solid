import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gxg3o6b4o.css';
import '../../css/b/byrkhybct.css';
import '../../css/q/q1czuacal.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="gxg3o6b4o"/><path class="byrkhybct"/><path class="q1czuacal"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:sleet-duo"} {...others} />);
}

export default Component;
