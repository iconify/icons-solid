import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/txs0h11aa.css';
import '../../css/f/fgo78vant.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="txs0h11aa"/><path clip-rule="evenodd" class="fgo78vant"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:earth-lock-filled"} {...others} />);
}

export default Component;
