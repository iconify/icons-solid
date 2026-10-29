import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/l1gqfjvim.css';
import '../../css/v/v2g7flb6x.css';
import '../../css/u/uroqyvbfx.css';
import '../../css/j/jm5tno_bu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="l1gqfjvim"/><path class="v2g7flb6x wm-a"/><path class="uroqyvbfx wm-k"/><path class="jm5tno_bu wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:aperture-sketch"} {...others} />);
}

export default Component;
