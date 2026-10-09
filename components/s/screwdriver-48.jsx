import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/si-3bpbzc.css';
import '../../css/y/yck_bwygh.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="si-3bpbzc"/><path class="yck_bwygh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:screwdriver-48"} {...others} />);
}

export default Component;
