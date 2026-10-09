import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t1d2hbbbl.css';
import '../../css/t/to__--22z.css';
import '../../css/l/lzwt4-b9i.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="t1d2hbbbl"/><path class="to__--22z"/><path class="lzwt4-b9i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:offshore-platform-20-bold"} {...others} />);
}

export default Component;
