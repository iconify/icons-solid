import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_kozj14v.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="t_kozj14v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:bluetooth"} {...others} />);
}

export default Component;
