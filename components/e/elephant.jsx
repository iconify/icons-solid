import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t0_loy4wi.css';
import '../../css/z/zzxor3b5a.css';
import '../../css/l/l-d_xdbdd.css';
import '../../css/t/t-k4tpb0z.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="t0_loy4wi"/><path class="zzxor3b5a"/><path class="l-d_xdbdd"/><path class="t-k4tpb0z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:elephant"} {...others} />);
}

export default Component;
