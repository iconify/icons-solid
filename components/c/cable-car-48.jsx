import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f54a80bxs.css';
import '../../css/a/ae8a-5b_j.css';
import '../../css/e/enbnz-bnz.css';
import '../../css/k/k7zqwda6d.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="f54a80bxs"/><path class="ae8a-5b_j"/><path class="enbnz-bnz"/><path class="k7zqwda6d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cable-car-48"} {...others} />);
}

export default Component;
