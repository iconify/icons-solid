import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/p/p251zobjz.css';
import '../../css/m/msq5a2bic.css';
import '../../css/x/x_tzwrobw.css';
import '../../css/a/aaak5tbjc.css';
import '../../css/q/qli3yybsn.css';
import '../../css/t/t20ne0f3d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="p251zobjz wm-shadow"/><path class="msq5a2bic"/><path class="x_tzwrobw"/><path class="aaak5tbjc"/><path class="qli3yybsn wm-shine"/><path class="t20ne0f3d wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:baguette"} {...others} />);
}

export default Component;
