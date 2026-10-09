import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uxmtgk7_c.css';
import '../../css/e/el25l0wwk.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="uxmtgk7_c"/><path class="el25l0wwk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:heat-battery-48-bold"} {...others} />);
}

export default Component;
