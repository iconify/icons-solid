import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yrlbef4-h.css';
import '../../css/y/y17nwib9u.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="yrlbef4-h"/><path class="y17nwib9u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:computers-devices-electronics-click-select-tablet"} {...others} />);
}

export default Component;
