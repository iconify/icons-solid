import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z53h8x6cn.css';
import '../../css/s/s4oh_vbgz.css';
import '../../css/o/owlaymb3a.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="z53h8x6cn"/><path class="s4oh_vbgz"/><path class="owlaymb3a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:spring-balance-48"} {...others} />);
}

export default Component;
