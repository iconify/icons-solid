import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j0topkbwv.css';
import '../../css/w/w673-_bht.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="j0topkbwv"/><path class="w673-_bht"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:magma-chamber-20"} {...others} />);
}

export default Component;
