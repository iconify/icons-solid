import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/onux0z-vm.css';
import '../../css/f/f5m_ylwro.css';
import '../../css/v/vvusakkjr.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="onux0z-vm"/><path class="f5m_ylwro"/><path class="vvusakkjr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:emissions-down-20-bold"} {...others} />);
}

export default Component;
