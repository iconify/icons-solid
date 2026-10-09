import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u9qjnk78v.css';
import '../../css/j/jsw558btz.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="u9qjnk78v"/><path class="jsw558btz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:milestone-20-bold"} {...others} />);
}

export default Component;
