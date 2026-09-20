import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hdehsob5o.css';
import '../../css/q/qchodfbjt.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="hdehsob5o"/><path class="qchodfbjt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:interface-essential-home-2"} {...others} />);
}

export default Component;
