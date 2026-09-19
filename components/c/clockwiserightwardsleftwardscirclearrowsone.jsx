import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cu5b3g62n.css';
import '../../css/l/lkpw8_1oe.css';
import '../../css/i/ig4m5q9hu.css';
import '../../css/i/ibby-ym8u.css';
import '../../css/m/mfcixzfvw.css';
import '../../css/j/jutc9ccxs.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="cu5b3g62n"/><path class="lkpw8_1oe"/><path class="ig4m5q9hu"/><path class="ibby-ym8u"/><path class="mfcixzfvw"/><path class="jutc9ccxs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:clockwiserightwardsleftwardscirclearrowsone"} {...others} />);
}

export default Component;
