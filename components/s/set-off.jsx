import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/s/shidfnbcb.css';
import '../../css/x/xgjnkbdze.css';
import '../../css/i/i-3wzrbog.css';
import '../../css/l/l1lz8dbkq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="shidfnbcb"/><path class="xgjnkbdze"/><path class="i-3wzrbog"/><path class="l1lz8dbkq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:set-off"} {...others} />);
}

export default Component;
