import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/berhd0bqr.css';
import '../../css/u/ue40k2bdx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="berhd0bqr"/><path class="ue40k2bdx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:bell-minus-filled"} {...others} />);
}

export default Component;
