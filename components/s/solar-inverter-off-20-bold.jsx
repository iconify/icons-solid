import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/azwzitbqs.css';
import '../../css/h/h4q4ylb4z.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="azwzitbqs"/><path class="h4q4ylb4z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:solar-inverter-off-20-bold"} {...others} />);
}

export default Component;
