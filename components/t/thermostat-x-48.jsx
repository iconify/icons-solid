import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i42iihbqt.css';
import '../../css/l/l4p0db2vd.css';
import '../../css/h/h3_74q9gb.css';
import '../../css/h/h95v30bmf.css';
import '../../css/e/empdt5byq.css';
import '../../css/j/j3cy-fbyb.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="i42iihbqt"/><path class="l4p0db2vd"/><path class="h3_74q9gb"/><path class="h95v30bmf"/><path class="empdt5byq"/><path class="j3cy-fbyb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:thermostat-x-48"} {...others} />);
}

export default Component;
