import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m8s-z80le.css';
import '../../css/p/pkm70y_4f.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="m8s-z80le"/><path class="pkm70y_4f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:message-dots-48-bold"} {...others} />);
}

export default Component;
