import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a_9n7s0do.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a_9n7s0do"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:deal-outline"} {...others} />);
}

export default Component;
