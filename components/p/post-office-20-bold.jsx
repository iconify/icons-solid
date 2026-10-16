import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/krbuex_sg.css';
import '../../css/p/pv8po1b5r.css';
import '../../css/f/fvs6qwbry.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="krbuex_sg"/><path class="pv8po1b5r"/><path class="fvs6qwbry"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:post-office-20-bold"} {...others} />);
}

export default Component;
