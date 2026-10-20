import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lq6amyqet.css';
import '../../css/y/yoyl5gbhe.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="lq6amyqet"/><path class="yoyl5gbhe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:search-sparkle-20"} {...others} />);
}

export default Component;
