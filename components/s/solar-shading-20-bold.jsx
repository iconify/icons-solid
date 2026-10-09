import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o-s9c5bkm.css';
import '../../css/u/uyag2jl5g.css';
import '../../css/l/l4v9huevr.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="o-s9c5bkm"/><path class="uyag2jl5g"/><path class="l4v9huevr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:solar-shading-20-bold"} {...others} />);
}

export default Component;
