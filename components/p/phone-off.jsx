import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/v/v3xgftbny.css';
import '../../css/l/ln1_ybbpi.css';
import '../../css/z/znt-8tb8p.css';
import '../../css/k/k9yaaohqa.css';
import '../../css/m/mrkqmab9s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="v3xgftbny"/><path class="ln1_ybbpi wm-shine"/><path class="wm-k znt-8tb8p"/><path class="k9yaaohqa wm-s"/><path class="mrkqmab9s wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:phone-off"} {...others} />);
}

export default Component;
