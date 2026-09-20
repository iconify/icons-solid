import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/guip_qbnz.css';
import '../../css/u/u8xg6l0oi.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="guip_qbnz"/><path class="u8xg6l0oi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:interface-essential-protect-rubber-ring"} {...others} />);
}

export default Component;
