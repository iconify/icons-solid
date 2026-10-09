import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x_h9q26nq.css';
import '../../css/y/yhqod3b-i.css';
import '../../css/v/vf1hj485a.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="x_h9q26nq"/><path class="yhqod3b-i"/><path class="vf1hj485a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:service-vessel-48"} {...others} />);
}

export default Component;
