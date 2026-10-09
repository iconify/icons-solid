import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dlocb6bmt.css';
import '../../css/d/dhj1chemz.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="dlocb6bmt"/><path class="dhj1chemz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:corner-right-down-20"} {...others} />);
}

export default Component;
