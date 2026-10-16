import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ktbqdwbht.css';
import '../../css/b/b6-euybfo.css';
import '../../css/l/l3a7n9d9j.css';
import '../../css/s/szj6ewbna.css';
import '../../css/v/v1r0_jbld.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ktbqdwbht"/><path class="b6-euybfo"/><path class="l3a7n9d9j"/><path class="szj6ewbna"/><path class="v1r0_jbld"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:timeline-48-bold"} {...others} />);
}

export default Component;
