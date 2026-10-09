import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mmjswi96d.css';
import '../../css/h/hz6q229uo.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="mmjswi96d"/><path class="hz6q229uo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:dollar-20-bold"} {...others} />);
}

export default Component;
