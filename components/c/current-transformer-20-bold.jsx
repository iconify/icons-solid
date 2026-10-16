import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o04_3t6ej.css';
import '../../css/k/ktlm5_bld.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="o04_3t6ej"/><path class="ktlm5_bld"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:current-transformer-20-bold"} {...others} />);
}

export default Component;
