import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fb5l6nbqc.css';
import '../../css/u/u6mkpijxa.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="fb5l6nbqc"/><path class="u6mkpijxa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:gloves-20"} {...others} />);
}

export default Component;
