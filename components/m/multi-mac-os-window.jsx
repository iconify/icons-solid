import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/vtcmcgchf.css';
import '../../css/g/gnio0ig7m.css';
import '../../css/s/scnmdvh_t.css';
import '../../css/o/ohrf1znlr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="vtcmcgchf"/><path class="gnio0ig7m"/><path class="scnmdvh_t"/><path class="ohrf1znlr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:multi-mac-os-window"} {...others} />);
}

export default Component;
