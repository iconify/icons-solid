import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gtzp5wbtj.css';
import '../../css/t/t4ohw1r8f.css';
import '../../css/x/xvaj_2byr.css';
import '../../css/k/k7lvh_brd.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="gtzp5wbtj"/><path class="t4ohw1r8f"/><path class="xvaj_2byr"/><path class="k7lvh_brd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wind-turbine-offshore-48"} {...others} />);
}

export default Component;
