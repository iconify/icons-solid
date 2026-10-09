import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rab_xlb9n.css';
import '../../css/q/qv1h0pygk.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="rab_xlb9n"/><path class="qv1h0pygk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wattmeter-20-bold"} {...others} />);
}

export default Component;
