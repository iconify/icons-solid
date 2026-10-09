import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/joilwmbfp.css';
import '../../css/f/flarx8bcv.css';
import '../../css/s/sxaczibgl.css';
import '../../css/z/zis9r0b_f.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="joilwmbfp"/><path class="flarx8bcv"/><path class="sxaczibgl"/><path class="zis9r0b_f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:load-shifting-20-bold"} {...others} />);
}

export default Component;
