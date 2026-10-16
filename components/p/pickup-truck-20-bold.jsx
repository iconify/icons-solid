import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z7nzr5vfc.css';
import '../../css/w/wbrmur83b.css';
import '../../css/t/tlpzu3bff.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="z7nzr5vfc"/><path class="wbrmur83b"/><path class="tlpzu3bff"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pickup-truck-20-bold"} {...others} />);
}

export default Component;
