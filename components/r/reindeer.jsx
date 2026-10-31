import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/zvivugbxc.css';
import '../../css/r/rqg6c4mxl.css';
import '../../css/m/mqf9i_b8w.css';
import '../../css/n/n-3392bwl.css';
import '../../css/e/e45klbbec.css';
import '../../css/v/vm7ivnb5y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow zvivugbxc"/><path class="rqg6c4mxl"/><path class="mqf9i_b8w"/><path class="n-3392bwl wm-s"/><path class="e45klbbec wm-s"/><path class="vm7ivnb5y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:reindeer"} {...others} />);
}

export default Component;
