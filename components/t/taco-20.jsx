import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d-wxw6w6n.css';
import '../../css/c/culelpt1f.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="d-wxw6w6n"/><path class="culelpt1f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:taco-20"} {...others} />);
}

export default Component;
