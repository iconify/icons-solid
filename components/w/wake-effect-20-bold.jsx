import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h6k8gux7d.css';
import '../../css/i/ilc61dbwx.css';
import '../../css/q/qdwklz3cm.css';
import '../../css/y/yhk6owtet.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="h6k8gux7d"/><path class="ilc61dbwx"/><path class="qdwklz3cm"/><path class="yhk6owtet"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wake-effect-20-bold"} {...others} />);
}

export default Component;
