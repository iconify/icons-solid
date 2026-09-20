import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rv4qqnbjd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rv4qqnbjd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:solar-angle"} {...others} />);
}

export default Component;
