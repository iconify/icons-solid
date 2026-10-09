import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0rqam1_z.css';
import '../../css/q/qjd9f8_8o.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="a0rqam1_z"/><path class="qjd9f8_8o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:charging-schedule-48-bold"} {...others} />);
}

export default Component;
