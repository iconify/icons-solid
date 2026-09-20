import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xnk8v9b_n.css';
import '../../css/n/nk7gp8b9h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xnk8v9b_n"/><path class="nk7gp8b9h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:crypto-currency-bitcoin-chip-bold"} {...others} />);
}

export default Component;
