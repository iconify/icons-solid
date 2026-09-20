import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ofc2p7fff.css';
import '../../css/o/o2idt1eal.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ofc2p7fff"/><path class="o2idt1eal"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:interface-essential-signout-logout"} {...others} />);
}

export default Component;
