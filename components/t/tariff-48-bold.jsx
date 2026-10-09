import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zw5t0sbxt.css';
import '../../css/d/dvnt-eb0j.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="zw5t0sbxt"/><path class="dvnt-eb0j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:tariff-48-bold"} {...others} />);
}

export default Component;
