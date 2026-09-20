import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xwbwyza6z.css';
import '../../css/w/wo_81unih.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xwbwyza6z"/><path class="wo_81unih"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:heart-broken-bold-duotone"} {...others} />);
}

export default Component;
