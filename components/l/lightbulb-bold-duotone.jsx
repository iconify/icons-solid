import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t1j0ccckq.css';
import '../../css/b/bdli7f47j.css';
import '../../css/x/xe1ahotxu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t1j0ccckq"/><path class="bdli7f47j"/><path class="xe1ahotxu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:lightbulb-bold-duotone"} {...others} />);
}

export default Component;
