import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ojno-rj8g.css';
import '../../css/i/iyti-7bea.css';
import '../../css/w/wi_h01enb.css';
import '../../css/f/fonho850d.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ojno-rj8g"/><path class="iyti-7bea"/><path class="wi_h01enb"/><path class="fonho850d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hydrogen-tank-48"} {...others} />);
}

export default Component;
