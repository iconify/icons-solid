import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kwzqo-bou.css';
import '../../css/d/dt1emtbnl.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="kwzqo-bou"/><path class="dt1emtbnl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:return-down-back-outline"} {...others} />);
}

export default Component;
