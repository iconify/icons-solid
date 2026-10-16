import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t85io_b9n.css';
import '../../css/y/yl9kalg0k.css';
import '../../css/f/feujplb3t.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="t85io_b9n"/><path class="yl9kalg0k"/><path class="feujplb3t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:op-amp-48-bold"} {...others} />);
}

export default Component;
