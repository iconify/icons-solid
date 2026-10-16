import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oq7ovqb7o.css';
import '../../css/i/iace3isjh.css';
import '../../css/k/kokl_z4xz.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="oq7ovqb7o"/><path class="iace3isjh"/><path class="kokl_z4xz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hydrogen-trailer-20-bold"} {...others} />);
}

export default Component;
