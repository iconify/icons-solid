import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lrjnvkbuz.css';
import '../../css/d/drtg3332s.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="lrjnvkbuz"/><path class="drtg3332s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wholesale-price-48"} {...others} />);
}

export default Component;
