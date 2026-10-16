import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lyz2lacbc.css';
import '../../css/g/g51el4b_s.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="lyz2lacbc"/><path class="g51el4b_s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:car-key-20"} {...others} />);
}

export default Component;
