import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tqqbrcczl.css';
import '../../css/y/yyncrjb7a.css';
import '../../css/w/wk3lbmb9q.css';
import '../../css/l/l6ytsyb8i.css';
import '../../css/x/xkzbv-bma.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="tqqbrcczl"/><path class="yyncrjb7a"/><path class="wk3lbmb9q"/><path class="l6ytsyb8i"/><path class="xkzbv-bma"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:incomingenvelope"} {...others} />);
}

export default Component;
