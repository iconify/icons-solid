import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q97zhzb7g.css';
import '../../css/v/v361qqj9p.css';
import '../../css/u/ufgiultbe.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="q97zhzb7g"/><path class="v361qqj9p"/><path class="ufgiultbe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:goal-20-bold"} {...others} />);
}

export default Component;
