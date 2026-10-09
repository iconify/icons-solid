import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fiwgf_byw.css';
import '../../css/c/ci54x0bdq.css';
import '../../css/z/zng18pbqo.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="fiwgf_byw"/><path class="ci54x0bdq"/><path class="zng18pbqo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cupcake-20"} {...others} />);
}

export default Component;
