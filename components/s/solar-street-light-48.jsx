import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o-ohmbl_e.css';
import '../../css/m/mhdsebbpt.css';
import '../../css/i/ib5meve9m.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="o-ohmbl_e"/><path class="mhdsebbpt"/><path class="ib5meve9m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:solar-street-light-48"} {...others} />);
}

export default Component;
