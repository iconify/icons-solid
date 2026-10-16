import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wsc_0ebep.css';
import '../../css/u/ukrjy-bvh.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="wsc_0ebep"/><path class="ukrjy-bvh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ratchet-48-bold"} {...others} />);
}

export default Component;
