import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l6tjyi3qm.css';
import '../../css/l/lafrf9bfq.css';
import '../../css/l/lpmetsbqk.css';
import '../../css/p/pd2qrk8_a.css';
import '../../css/x/xvc76bbmo.css';
import '../../css/x/x2h1jgx7i.css';
import '../../css/r/rk5ayjb8g.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="l6tjyi3qm"/><path class="lafrf9bfq"/><path class="lpmetsbqk"/><path class="pd2qrk8_a"/><path class="xvc76bbmo"/><path class="x2h1jgx7i"/><path class="rk5ayjb8g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:clamshellmobile"} {...others} />);
}

export default Component;
