import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l9vkkfbyq.css';
import '../../css/u/uhh21oc6x.css';
import '../../css/d/d00rzfrbm.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="l9vkkfbyq"/><path class="uhh21oc6x"/><path class="d00rzfrbm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:potentiometer-20"} {...others} />);
}

export default Component;
