import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s-2jtuy5b.css';
import '../../css/i/iuh-1_bkr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s-2jtuy5b"/><path clip-rule="evenodd" class="iuh-1_bkr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:tv-minimal-play-filled"} {...others} />);
}

export default Component;
