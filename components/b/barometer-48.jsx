import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hac57wbhi.css';
import '../../css/m/mayk6bclt.css';
import '../../css/g/g5aipabgd.css';
import '../../css/f/f1kd_obxa.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hac57wbhi"/><path class="mayk6bclt"/><path class="g5aipabgd"/><path class="f1kd_obxa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:barometer-48"} {...others} />);
}

export default Component;
