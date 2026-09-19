import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/v/vces4wbou.css';
import '../../css/f/fb_51sb_m.css';
import '../../css/j/jxsnms7hz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><circle class="vces4wbou"/><circle class="fb_51sb_m"/><path class="jxsnms7hz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:division"} {...others} />);
}

export default Component;
