import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rbg6sqfhk.css';
import '../../css/q/qb-anoa-e.css';
import '../../css/t/tnt8cd_0v.css';
import '../../css/s/sm5mxobst.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="rbg6sqfhk"/><path class="qb-anoa-e"/><path class="tnt8cd_0v"/><path class="sm5mxobst"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pizza-oven-20-bold"} {...others} />);
}

export default Component;
