import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lp1zz_b8k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lp1zz_b8k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:solana-sol-line"} {...others} />);
}

export default Component;
