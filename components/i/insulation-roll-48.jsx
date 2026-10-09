import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yw2u6puwh.css';
import '../../css/r/r_oqf1inc.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="yw2u6puwh"/><path class="r_oqf1inc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:insulation-roll-48"} {...others} />);
}

export default Component;
