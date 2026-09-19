import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/p3wj74wpx.css';
import '../../css/f/fy32lnbdn.css';
import '../../css/e/esn5smbra.css';
import '../../css/g/gawt1xbko.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="p3wj74wpx"/><path class="fy32lnbdn"/><path class="esn5smbra"/><path class="gawt1xbko"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:ev-station"} {...others} />);
}

export default Component;
