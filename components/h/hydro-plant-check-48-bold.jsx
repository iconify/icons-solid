import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vc-70lbob.css';
import '../../css/b/b-pvjkb6t.css';
import '../../css/t/tvsqsyb1l.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="vc-70lbob"/><path class="b-pvjkb6t"/><path class="tvsqsyb1l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hydro-plant-check-48-bold"} {...others} />);
}

export default Component;
