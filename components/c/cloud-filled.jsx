import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j1gi4uztp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j1gi4uztp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:cloud-filled"} {...others} />);
}

export default Component;
