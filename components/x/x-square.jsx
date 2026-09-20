import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rfa3zybio.css';
import '../../css/s/so8u7503r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rfa3zybio"/><path class="so8u7503r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:x-square"} {...others} />);
}

export default Component;
