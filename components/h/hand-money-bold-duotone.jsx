import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a7qi5pmcg.css';
import '../../css/s/sj3u2muax.css';
import '../../css/p/ptvsaoale.css';
import '../../css/n/n0us1t6dp.css';
import '../../css/k/kd68iacai.css';
import '../../css/k/kas_9g52n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a7qi5pmcg"/><path class="sj3u2muax"/><path class="ptvsaoale"/><path class="n0us1t6dp"/><path class="kd68iacai"/><path clip-rule="evenodd" class="kas_9g52n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:hand-money-bold-duotone"} {...others} />);
}

export default Component;
