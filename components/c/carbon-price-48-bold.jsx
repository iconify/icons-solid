import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zw5t0sbxt.css';
import '../../css/u/u2hgkfb5m.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="zw5t0sbxt"/><path class="u2hgkfb5m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:carbon-price-48-bold"} {...others} />);
}

export default Component;
