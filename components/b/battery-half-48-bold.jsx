import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ia0elbbtb.css';
import '../../css/z/zwjjpmnxf.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ia0elbbtb"/><path class="zwjjpmnxf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:battery-half-48-bold"} {...others} />);
}

export default Component;
