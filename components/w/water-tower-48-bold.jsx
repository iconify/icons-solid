import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j63hg3b3u.css';
import '../../css/j/je8d7-b9z.css';
import '../../css/e/e9n3d1ijm.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="j63hg3b3u"/><path class="je8d7-b9z"/><path class="e9n3d1ijm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:water-tower-48-bold"} {...others} />);
}

export default Component;
