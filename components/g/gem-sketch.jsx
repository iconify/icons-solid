import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/xg0j9x26e.css';
import '../../css/b/blft1cbon.css';
import '../../css/c/clf6vsb1b.css';
import '../../css/x/xhd5x_bfq.css';
import '../../css/m/mb2lklbxi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="xg0j9x26e"/><path class="blft1cbon wm-k"/><path class="clf6vsb1b wm-a"/><path class="wm-k xhd5x_bfq"/><path class="mb2lklbxi wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:gem-sketch"} {...others} />);
}

export default Component;
