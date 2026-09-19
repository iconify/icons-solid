import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/t/tpmt_cc7r.css';
import '../../css/x/xgjnkbdze.css';
import '../../css/i/i-3wzrbog.css';
import '../../css/c/c2ha36_pi.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="tpmt_cc7r"/><path class="xgjnkbdze"/><path class="i-3wzrbog"/><path class="c2ha36_pi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:set-off"} {...others} />);
}

export default Component;
