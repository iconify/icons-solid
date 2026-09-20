import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ydne_bc6v.css';
import '../../css/l/l3c9lplte.css';
import '../../css/j/jebph_z3j.css';
import '../../css/v/v6eawsb5q.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ydne_bc6v"><path class="l3c9lplte"/><path class="jebph_z3j"/><path class="v6eawsb5q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:notification-alarm-snooze"} {...others} />);
}

export default Component;
