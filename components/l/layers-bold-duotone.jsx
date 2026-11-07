import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m3vb0177b.css';
import '../../css/n/nvazcab2q.css';
import '../../css/l/lh00_hb_l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m3vb0177b"/><path class="nvazcab2q"/><path class="lh00_hb_l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:layers-bold-duotone"} {...others} />);
}

export default Component;
