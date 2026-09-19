import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e3trzrbdm.css';
import '../../css/l/lrflrndpo.css';
import '../../css/d/dm5bfnbry.css';
import '../../css/m/m_rznqb0n.css';
import '../../css/i/izcsuhbwt.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="e3trzrbdm"/><circle class="lrflrndpo"/><circle class="dm5bfnbry"/><circle class="m_rznqb0n"/><path class="izcsuhbwt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:speechbubble"} {...others} />);
}

export default Component;
