import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eum8pabgr.css';
import '../../css/t/tuua3db3n.css';
import '../../css/g/gng0j2b3j.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="eum8pabgr"/><path class="tuua3db3n"/><path class="gng0j2b3j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:baseball-1-duo"} {...others} />);
}

export default Component;
