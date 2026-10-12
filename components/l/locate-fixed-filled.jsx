import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k_txi0raq.css';
import '../../css/x/xb_-jcbty.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k_txi0raq"/><path clip-rule="evenodd" class="xb_-jcbty"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:locate-fixed-filled"} {...others} />);
}

export default Component;
