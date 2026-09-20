import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rld3_rbtv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rld3_rbtv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:send-variant-clock-outline"} {...others} />);
}

export default Component;
