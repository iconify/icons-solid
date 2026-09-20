import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r4844qbfw.css';
import '../../css/v/v23rzsocn.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="r4844qbfw"/><path class="v23rzsocn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:computers-devices-electronics-harddisk"} {...others} />);
}

export default Component;
