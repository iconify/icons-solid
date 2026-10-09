import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l8ue7ubrb.css';
import '../../css/o/o_kxisbow.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="l8ue7ubrb"/><path class="o_kxisbow"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:forecast-48-bold"} {...others} />);
}

export default Component;
