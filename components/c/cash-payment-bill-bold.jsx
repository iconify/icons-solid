import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bl401gbue.css';
import '../../css/x/xjfts2dhg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bl401gbue"/><path class="xjfts2dhg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:cash-payment-bill-bold"} {...others} />);
}

export default Component;
