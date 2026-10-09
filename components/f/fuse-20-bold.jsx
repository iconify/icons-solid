import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w4d61mpoq.css';
import '../../css/l/l0042n2sd.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="w4d61mpoq"/><path class="l0042n2sd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:fuse-20-bold"} {...others} />);
}

export default Component;
