import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rin2rdbyp.css';
import '../../css/y/yoo-x4z3f.css';
import '../../css/d/d27j7obsk.css';
import '../../css/q/qb_7iivgy.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="rin2rdbyp"/><path class="yoo-x4z3f"/><path class="d27j7obsk"/><path class="qb_7iivgy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ev-charger-48-bold"} {...others} />);
}

export default Component;
