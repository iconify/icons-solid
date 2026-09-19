import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mhssn9pid.css';
import '../../css/i/iu35e1xme.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="mhssn9pid"/><circle class="iu35e1xme"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:bitaxe-filled"} {...others} />);
}

export default Component;
