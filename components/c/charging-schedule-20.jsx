import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx5kz2dev.css';
import '../../css/k/k98nskc3g.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="jx5kz2dev"/><path class="k98nskc3g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:charging-schedule-20"} {...others} />);
}

export default Component;
