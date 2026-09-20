import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yiku0v4qh.css';
import '../../css/z/z4a7i9bif.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="yiku0v4qh"/><path class="z4a7i9bif"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:internet-network-computer-download"} {...others} />);
}

export default Component;
