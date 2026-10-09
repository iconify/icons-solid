import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rkh_084xi.css';
import '../../css/w/wpnm42b6c.css';
import '../../css/g/g17jsq6yv.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="rkh_084xi"/><path class="wpnm42b6c"/><path class="g17jsq6yv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:smart-charging-20-bold"} {...others} />);
}

export default Component;
