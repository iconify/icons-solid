import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwgnjtbeu.css';
import '../../css/y/yqicoj3_e.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="wwgnjtbeu"/><path class="yqicoj3_e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:computers-devices-electronics-television-vintage"} {...others} />);
}

export default Component;
