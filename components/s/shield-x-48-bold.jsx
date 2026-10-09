import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w4447fbqf.css';
import '../../css/t/tozua4tpq.css';
import '../../css/x/x2fxl6y7a.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="w4447fbqf"/><path class="tozua4tpq"/><path class="x2fxl6y7a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:shield-x-48-bold"} {...others} />);
}

export default Component;
