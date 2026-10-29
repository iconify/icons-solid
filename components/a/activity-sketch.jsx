import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/i62_4pb6q.css';
import '../../css/n/n-y_o-btm.css';
import '../../css/c/cfe6kwbgv.css';
import '../../css/y/yvr-gzb_a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="i62_4pb6q wm-k"/><path class="n-y_o-btm wm-deco"/><path class="cfe6kwbgv wm-k"/><path class="wm-deco yvr-gzb_a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:activity-sketch"} {...others} />);
}

export default Component;
