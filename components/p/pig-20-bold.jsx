import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cbyolzb7w.css';
import '../../css/b/byv6wwb2b.css';
import '../../css/r/rv2qj4l3y.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="cbyolzb7w"/><path class="byv6wwb2b"/><path class="rv2qj4l3y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pig-20-bold"} {...others} />);
}

export default Component;
