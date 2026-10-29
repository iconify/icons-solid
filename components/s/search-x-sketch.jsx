import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/vzu_nabrz.css';
import '../../css/t/ttwf-zbzb.css';
import '../../css/l/lzc_04b6m.css';
import '../../css/o/on-fg_sbj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="vzu_nabrz"/><path class="ttwf-zbzb wm-a"/><path class="lzc_04b6m wm-k"/><path class="on-fg_sbj wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:search-x-sketch"} {...others} />);
}

export default Component;
