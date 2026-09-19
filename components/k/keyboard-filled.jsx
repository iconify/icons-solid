import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/br9gtx66z.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="br9gtx66z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:keyboard-filled"} {...others} />);
}

export default Component;
