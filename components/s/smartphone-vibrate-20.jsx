import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d90wrwq5c.css';
import '../../css/z/z-2w2eb0s.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="d90wrwq5c"/><path class="z-2w2eb0s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:smartphone-vibrate-20"} {...others} />);
}

export default Component;
