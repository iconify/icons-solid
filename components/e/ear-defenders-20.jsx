import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/syjj109cb.css';
import '../../css/y/yk0otz46s.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="syjj109cb"/><path class="yk0otz46s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ear-defenders-20"} {...others} />);
}

export default Component;
