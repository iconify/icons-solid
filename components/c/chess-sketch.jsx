import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/v1xl4fjpl.css';
import '../../css/v/vnwe1ttqq.css';
import '../../css/l/lawrsyelz.css';
import '../../css/e/e2kk_lgwx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="v1xl4fjpl"/><path class="vnwe1ttqq wm-k"/><path class="lawrsyelz wm-k"/><path class="e2kk_lgwx wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:chess-sketch"} {...others} />);
}

export default Component;
