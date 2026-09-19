import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j_v47x3vh.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="j_v47x3vh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:filamentphp"} {...others} />);
}

export default Component;
