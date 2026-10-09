import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r_ts8_bno.css';
import '../../css/m/mmtwl7b9d.css';
import '../../css/b/bpxnjdbqd.css';
import '../../css/f/fpzuy5-2x.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="r_ts8_bno"/><path class="mmtwl7b9d"/><path class="bpxnjdbqd"/><path class="fpzuy5-2x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:lakeside-cabin-48-bold"} {...others} />);
}

export default Component;
