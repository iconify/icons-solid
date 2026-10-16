import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q2qly6b8v.css';
import '../../css/y/yxx6x7qnn.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="q2qly6b8v"/><path class="yxx6x7qnn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:heat-pump-hybrid-20-bold"} {...others} />);
}

export default Component;
