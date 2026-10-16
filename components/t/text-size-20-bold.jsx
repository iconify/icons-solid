import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tsy-cw1ys.css';
import '../../css/o/o338q5bim.css';
import '../../css/k/k_q3cjb9q.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="tsy-cw1ys"/><path class="o338q5bim"/><path class="k_q3cjb9q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:text-size-20-bold"} {...others} />);
}

export default Component;
