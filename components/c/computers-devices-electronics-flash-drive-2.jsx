import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nh99j7bbd.css';
import '../../css/x/xytczabbj.css';
import '../../css/f/fe7n8hbyk.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="nh99j7bbd"/><path class="xytczabbj"/><path class="fe7n8hbyk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:computers-devices-electronics-flash-drive-2"} {...others} />);
}

export default Component;
