import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sg9bwxhqq.css';
import '../../css/u/ukmfrgzls.css';
import '../../css/b/bet_z3b5v.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="sg9bwxhqq"/><path class="ukmfrgzls"/><path class="bet_z3b5v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:geothermal-plant-48"} {...others} />);
}

export default Component;
