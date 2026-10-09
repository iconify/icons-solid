import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p_1lwukaz.css';
import '../../css/g/gandzumwe.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="p_1lwukaz"/><path class="gandzumwe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:graduation-cap-20"} {...others} />);
}

export default Component;
