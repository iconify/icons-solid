import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ily569bri.css';
import '../../css/w/wegqv6blc.css';
import '../../css/e/ed4mxccbx.css';
import '../../css/e/eqdr87b3l.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ily569bri"/><path class="wegqv6blc"/><path class="ed4mxccbx"/><path class="eqdr87b3l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:nuclear-plant-x-20"} {...others} />);
}

export default Component;
