import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j-wsinb4h.css';
import '../../css/p/pqv-_6b_b.css';
import '../../css/z/zv1y48bco.css';
import '../../css/r/r2a2075fm.css';
import '../../css/a/a8v1ihj3j.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="j-wsinb4h"/><path class="pqv-_6b_b"/><path class="zv1y48bco"/><path class="r2a2075fm"/><path class="a8v1ihj3j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:solar-irradiance-20-bold"} {...others} />);
}

export default Component;
