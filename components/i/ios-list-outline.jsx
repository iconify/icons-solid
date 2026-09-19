import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q0k_xybbx.css';
import '../../css/x/xxoj21b8d.css';
import '../../css/b/b40jmxusk.css';
import '../../css/k/khrc9wbsk.css';
import '../../css/g/g85knccnw.css';
import '../../css/g/gs4htub8c.css';
import '../../css/q/qflu69b1a.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="q0k_xybbx"/><path class="xxoj21b8d"/><path class="b40jmxusk"/><path class="khrc9wbsk"/><circle class="g85knccnw"/><circle class="gs4htub8c"/><circle class="qflu69b1a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-list-outline"} {...others} />);
}

export default Component;
