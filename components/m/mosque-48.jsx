import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s82-gfb1o.css';
import '../../css/v/vs4bry39s.css';
import '../../css/f/fj5kn0w7n.css';
import '../../css/u/uedre7bit.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="s82-gfb1o"/><path class="vs4bry39s"/><path class="fj5kn0w7n"/><path class="uedre7bit"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:mosque-48"} {...others} />);
}

export default Component;
