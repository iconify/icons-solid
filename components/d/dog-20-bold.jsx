import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zyee1r7bl.css';
import '../../css/r/rvcii1b1l.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="zyee1r7bl"/><path class="rvcii1b1l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:dog-20-bold"} {...others} />);
}

export default Component;
