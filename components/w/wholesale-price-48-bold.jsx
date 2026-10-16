import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zw5t0sbxt.css';
import '../../css/m/m29p03crh.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="zw5t0sbxt"/><path class="m29p03crh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wholesale-price-48-bold"} {...others} />);
}

export default Component;
