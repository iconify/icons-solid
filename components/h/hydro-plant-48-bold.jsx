import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vc-70lbob.css';
import '../../css/u/ul7pjw58j.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="vc-70lbob"/><path class="ul7pjw58j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hydro-plant-48-bold"} {...others} />);
}

export default Component;
