import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fhaob1brm.css';
import '../../css/j/jcj3-xbzt.css';
import '../../css/w/w56nxtbio.css';
import '../../css/u/ua_1xhq5f.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="fhaob1brm"/><path class="jcj3-xbzt"/><path class="w56nxtbio"/><path class="ua_1xhq5f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:lakeside-cabin-48"} {...others} />);
}

export default Component;
