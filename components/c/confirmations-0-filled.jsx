import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mpc_zebhv.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="mpc_zebhv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:confirmations-0-filled"} {...others} />);
}

export default Component;
