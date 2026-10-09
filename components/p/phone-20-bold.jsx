import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o5q5yvb6f.css';
import '../../css/r/rhb8wbjre.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="o5q5yvb6f"/><path class="rhb8wbjre"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:phone-20-bold"} {...others} />);
}

export default Component;
