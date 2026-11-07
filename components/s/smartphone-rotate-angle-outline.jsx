import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ny3ppybwj.css';
import '../../css/q/qbpj05spk.css';
import '../../css/u/u27z1kbcm.css';
import '../../css/n/ndm5459jr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ny3ppybwj"/><path class="qbpj05spk"/><path class="u27z1kbcm"/><path class="ndm5459jr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:smartphone-rotate-angle-outline"} {...others} />);
}

export default Component;
