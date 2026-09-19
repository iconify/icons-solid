import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gm0a7yn5d.css';
import '../../css/s/su784c8yq.css';
import '../../css/x/xot3z3mcu.css';
import '../../css/l/lahk8gn4o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gm0a7yn5d"/><path class="su784c8yq"/><path class="xot3z3mcu"/><path class="lahk8gn4o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:nfc-filled"} {...others} />);
}

export default Component;
