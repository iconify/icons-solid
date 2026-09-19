import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y0x4gpamw.css';
import '../../css/r/r0axpsbgp.css';
import '../../css/k/kkuzcmutw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="y0x4gpamw"/><path class="r0axpsbgp"/><path class="kkuzcmutw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:circledideographadvantage"} {...others} />);
}

export default Component;
