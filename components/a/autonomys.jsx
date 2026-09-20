import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zydzfwbbe.css';
import '../../css/l/ln30gwdww.css';
import '../../css/i/itlbjob-i.css';
import '../../css/m/mw_1sab7i.css';
import '../../css/w/w4yj_3h6f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zydzfwbbe"/><path class="ln30gwdww"/><path class="itlbjob-i"/><path class="mw_1sab7i"/><path class="w4yj_3h6f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:autonomys"} {...others} />);
}

export default Component;
