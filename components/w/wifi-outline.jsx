import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/ss6umgmez.css';
import '../../css/x/xelml5b_j.css';
import '../../css/u/u51rzi9rf.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ss6umgmez"/><path class="xelml5b_j"/><path class="u51rzi9rf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:wifi-outline"} {...others} />);
}

export default Component;
