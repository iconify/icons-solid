import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y63xcbv6l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y63xcbv6l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:wifi-sync"} {...others} />);
}

export default Component;
