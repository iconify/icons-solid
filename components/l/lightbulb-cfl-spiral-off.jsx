import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tdapgy3bu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tdapgy3bu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:lightbulb-cfl-spiral-off"} {...others} />);
}

export default Component;
