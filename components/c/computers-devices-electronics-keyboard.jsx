import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bj39dlnoc.css';
import '../../css/w/wfdwuhjle.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="bj39dlnoc"/><path class="wfdwuhjle"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:computers-devices-electronics-keyboard"} {...others} />);
}

export default Component;
