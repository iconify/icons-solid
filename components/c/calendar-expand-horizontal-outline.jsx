import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/paivumq6f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="paivumq6f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:calendar-expand-horizontal-outline"} {...others} />);
}

export default Component;
