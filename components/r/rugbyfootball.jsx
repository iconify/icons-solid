import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q2bjk7byt.css';
import '../../css/c/c33hiv2aq.css';
import '../../css/s/srb0o_b6b.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="q2bjk7byt"/><path class="c33hiv2aq"/><path class="srb0o_b6b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:rugbyfootball"} {...others} />);
}

export default Component;
