import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ew6x_87ns.css';
import '../../css/l/lfj5m2b1j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ew6x_87ns"/><path class="lfj5m2b1j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:whatsapp"} {...others} />);
}

export default Component;
