import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/x/xm80o4b2a.css';
import '../../css/d/d_0depbqg.css';
import '../../css/d/dx_hcswmk.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="xm80o4b2a"/><circle class="d_0depbqg"/><path class="dx_hcswmk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:watch-one"} {...others} />);
}

export default Component;
