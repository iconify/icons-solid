import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h4n2q8cza.css';
import '../../css/k/kehgtcamx.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="h4n2q8cza"/><path class="kehgtcamx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:carbon-negative-20-bold"} {...others} />);
}

export default Component;
