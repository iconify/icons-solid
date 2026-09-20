import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j9snzwc9m.css';
import '../../css/m/moby6ptxx.css';
import '../../css/p/pvxq0hblh.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="j9snzwc9m"/><path class="moby6ptxx"/><path class="pvxq0hblh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:zoom-fit-screen-16"} {...others} />);
}

export default Component;
