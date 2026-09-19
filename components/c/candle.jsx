import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bpgnzm0ee.css';
import '../../css/q/qceextqrn.css';
import '../../css/m/mdb2_kuhb.css';
import '../../css/p/pnyyfkb6b.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bpgnzm0ee"/><ellipse class="qceextqrn"/><path class="mdb2_kuhb"/><path class="pnyyfkb6b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:candle"} {...others} />);
}

export default Component;
