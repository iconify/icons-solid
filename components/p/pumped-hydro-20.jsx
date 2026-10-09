import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y3mg6mryn.css';
import '../../css/z/zykw2fvhd.css';
import '../../css/o/o1sgq7a6l.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="y3mg6mryn"/><path class="zykw2fvhd"/><path class="o1sgq7a6l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pumped-hydro-20"} {...others} />);
}

export default Component;
