import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lcoah42wi.css';
import '../../css/d/ds8ycwqxk.css';
import '../../css/w/wvv5gvb_e.css';
import '../../css/j/jrzpgj3pr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="lcoah42wi"/><path class="ds8ycwqxk"/><path class="wvv5gvb_e"/><path class="jrzpgj3pr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:hotel-do-not-clean"} {...others} />);
}

export default Component;
