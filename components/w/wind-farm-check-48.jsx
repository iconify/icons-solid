import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eodskgbyq.css';
import '../../css/h/hnhry0pqp.css';
import '../../css/i/iu3jepcxn.css';
import '../../css/y/y30vyqb4g.css';
import '../../css/d/drfjpwbtz.css';
import '../../css/h/hx8z7e3ak.css';
import '../../css/m/m2r6ydbun.css';
import '../../css/z/z4sj3ixdz.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="eodskgbyq"/><path class="hnhry0pqp"/><path class="iu3jepcxn"/><path class="y30vyqb4g"/><path class="drfjpwbtz"/><path class="hx8z7e3ak"/><path class="m2r6ydbun"/><path class="z4sj3ixdz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wind-farm-check-48"} {...others} />);
}

export default Component;
