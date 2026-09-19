import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i4y5ai05a.css';
import '../../css/g/gokp5ee5s.css';
import '../../css/p/po6jcjbna.css';
import '../../css/d/dz6f1bb_n.css';
import '../../css/s/sx_lc4b2y.css';
import '../../css/k/ktfexs44h.css';
import '../../css/n/n79901pmr.css';
import '../../css/a/a3z88gbeh.css';
import '../../css/g/g66mgdbsg.css';
import '../../css/x/x1piabs4t.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="i4y5ai05a"/><path class="gokp5ee5s"/><path class="po6jcjbna"/><path class="dz6f1bb_n"/><path class="sx_lc4b2y"/><path class="ktfexs44h"/><path class="n79901pmr"/><path class="a3z88gbeh"/><path class="g66mgdbsg"/><path class="x1piabs4t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:monorail"} {...others} />);
}

export default Component;
