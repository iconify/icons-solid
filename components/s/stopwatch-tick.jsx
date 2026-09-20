import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nv9y_8b6b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nv9y_8b6b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:stopwatch-tick"} {...others} />);
}

export default Component;
