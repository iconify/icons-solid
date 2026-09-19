import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k29q0_bwr.css';
import '../../css/k/k2jf398wg.css';
import '../../css/j/jwvrgrbxx.css';
import '../../css/t/ts368fb6l.css';
import '../../css/p/pyq7e7bre.css';
import '../../css/q/qtnb-_bjv.css';
import '../../css/s/srped5ply.css';
import '../../css/l/l176ldfhq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="k29q0_bwr"/><path class="k2jf398wg"/><path class="jwvrgrbxx"/><path class="ts368fb6l"/><path class="pyq7e7bre"/><path class="qtnb-_bjv"/><path class="srped5ply"/><path class="l176ldfhq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:japanesepostoffice"} {...others} />);
}

export default Component;
