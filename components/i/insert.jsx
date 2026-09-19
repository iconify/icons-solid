import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f8kd97g9n.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="f8kd97g9n st0"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dashicons:insert"} {...others} />);
}

export default Component;
