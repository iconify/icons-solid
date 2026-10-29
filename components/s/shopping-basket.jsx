import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zlqj1lbca.css';
import '../../css/r/rs4y1qbbb.css';
import '../../css/q/q-mjd6bdk.css';
import '../../css/z/zivijmbpx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-a zlqj1lbca"/><path class="rs4y1qbbb wm-k"/><path class="q-mjd6bdk wm-k"/><path class="wm-a zivijmbpx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:shopping-basket"} {...others} />);
}

export default Component;
