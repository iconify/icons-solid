import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gcyu-v6zp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gcyu-v6zp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ci:chart-bar-horizontal-01"} {...others} />);
}

export default Component;
