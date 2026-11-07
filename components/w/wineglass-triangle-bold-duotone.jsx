import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2p8dyb2p.css';
import '../../css/w/wn54x-yav.css';
import '../../css/k/kw88p8b_o.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="k2p8dyb2p"/><path class="wn54x-yav"/><path class="kw88p8b_o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:wineglass-triangle-bold-duotone"} {...others} />);
}

export default Component;
