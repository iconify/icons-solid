import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zwun26bcz.css';
import '../../css/b/buzpo8b_c.css';
import '../../css/y/yayoa0eev.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="zwun26bcz"/><path class="buzpo8b_c"/><path class="yayoa0eev"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:jack-up-vessel-48-bold"} {...others} />);
}

export default Component;
