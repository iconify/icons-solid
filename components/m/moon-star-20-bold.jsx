import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ohg506bqr.css';
import '../../css/y/yttl06bmd.css';
import '../../css/e/e-yptyqrl.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ohg506bqr"/><path class="yttl06bmd"/><path class="e-yptyqrl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:moon-star-20-bold"} {...others} />);
}

export default Component;
