import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z3onifb8e.css';
import '../../css/n/n9vml882r.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="z3onifb8e"/><path class="n9vml882r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:heated-towel-rail-20-bold"} {...others} />);
}

export default Component;
