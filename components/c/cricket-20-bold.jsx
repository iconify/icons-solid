import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mlx0ax7hq.css';
import '../../css/p/pgcgrcc8t.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="mlx0ax7hq"/><path class="pgcgrcc8t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cricket-20-bold"} {...others} />);
}

export default Component;
