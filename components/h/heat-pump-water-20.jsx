import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vnl7id0ua.css';
import '../../css/k/k4v56fbhg.css';
import '../../css/c/ci9x7ub2k.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="vnl7id0ua"/><path class="k4v56fbhg"/><path class="ci9x7ub2k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:heat-pump-water-20"} {...others} />);
}

export default Component;
