import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/vtcmcgchf.css';
import '../../css/s/scnmdvh_t.css';
import '../../css/f/f6zzwk00q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="vtcmcgchf"/><path class="scnmdvh_t"/><path class="f6zzwk00q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:multi-window"} {...others} />);
}

export default Component;
