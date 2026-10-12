import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bwzn8jb7l.css';
import '../../css/x/xhaqngbdr.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="bwzn8jb7l"/><path class="xhaqngbdr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bandage-20"} {...others} />);
}

export default Component;
