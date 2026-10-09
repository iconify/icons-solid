import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ritkb0p_x.css';
import '../../css/w/wp6vfybzd.css';
import '../../css/j/jgrjg5bie.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ritkb0p_x"/><path class="wp6vfybzd"/><path class="jgrjg5bie"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:arrow-left-right-20"} {...others} />);
}

export default Component;
