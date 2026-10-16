import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/luevgzb2b.css';
import '../../css/z/zrlocwb7c.css';
import '../../css/p/p7uzcdb2n.css';
import '../../css/y/ygtv74bcc.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="luevgzb2b"/><path class="zrlocwb7c"/><path class="p7uzcdb2n"/><path class="ygtv74bcc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:solar-farm-alert-48-bold"} {...others} />);
}

export default Component;
