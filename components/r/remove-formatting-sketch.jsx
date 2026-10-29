import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/r/ro8t4enop.css';
import '../../css/p/p4xp11bjk.css';
import '../../css/y/y8ndjjvgg.css';
import '../../css/r/rpa3wcr1x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="ro8t4enop wm-k"/><path class="p4xp11bjk wm-s"/><path class="wm-k y8ndjjvgg"/><path class="rpa3wcr1x wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:remove-formatting-sketch"} {...others} />);
}

export default Component;
