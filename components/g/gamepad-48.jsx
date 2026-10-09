import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yxhse7b_h.css';
import '../../css/n/nyeck7_mh.css';
import '../../css/w/wsddmcbbh.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="yxhse7b_h"/><path class="nyeck7_mh"/><path class="wsddmcbbh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:gamepad-48"} {...others} />);
}

export default Component;
