import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o6ltt5byn.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="o6ltt5byn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:satoshi-v2-filled"} {...others} />);
}

export default Component;
