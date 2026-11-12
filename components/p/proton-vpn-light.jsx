import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ch2-5kufi.css';
import '../../css/t/tg-9ed7zj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ch2-5kufi"/><path class="tg-9ed7zj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:proton-vpn-light"} {...others} />);
}

export default Component;
