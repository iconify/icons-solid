import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w9in_db-o.css';
import '../../css/i/ivhqrxbjl.css';
import '../../css/o/ov0i-wazh.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="w9in_db-o"/><path class="ivhqrxbjl"/><path class="ov0i-wazh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:offset-20-bold"} {...others} />);
}

export default Component;
