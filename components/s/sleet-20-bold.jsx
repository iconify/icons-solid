import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mlbvg8bgk.css';
import '../../css/a/ax-mmibru.css';
import '../../css/v/vyx3_bcxl.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="mlbvg8bgk"/><path class="ax-mmibru"/><path class="vyx3_bcxl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:sleet-20-bold"} {...others} />);
}

export default Component;
