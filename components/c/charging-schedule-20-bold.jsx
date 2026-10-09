import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h921llb8w.css';
import '../../css/a/ausrfdcxh.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="h921llb8w"/><path class="ausrfdcxh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:charging-schedule-20-bold"} {...others} />);
}

export default Component;
