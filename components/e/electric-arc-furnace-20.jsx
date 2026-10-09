import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/occ8gwb-f.css';
import '../../css/j/jl4qfih3g.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="occ8gwb-f"/><path class="jl4qfih3g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:electric-arc-furnace-20"} {...others} />);
}

export default Component;
