import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w5mm6ob9l.css';
import '../../css/c/cru7ppb5l.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="w5mm6ob9l"/><path class="cru7ppb5l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:handshake-48-bold"} {...others} />);
}

export default Component;
