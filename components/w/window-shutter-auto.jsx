import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j1hp5lcav.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j1hp5lcav"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:window-shutter-auto"} {...others} />);
}

export default Component;
