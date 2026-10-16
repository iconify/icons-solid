import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hei8_htdz.css';
import '../../css/m/m805q3b9o.css';
import '../../css/b/bhaor6bnd.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="hei8_htdz"/><path class="m805q3b9o"/><path class="bhaor6bnd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:marker-substation-20-bold"} {...others} />);
}

export default Component;
