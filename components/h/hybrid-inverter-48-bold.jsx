import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/he0-9w7up.css';
import '../../css/g/gsa3x5b0c.css';
import '../../css/p/p2d0_rjcy.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="he0-9w7up"/><path class="gsa3x5b0c"/><path class="p2d0_rjcy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hybrid-inverter-48-bold"} {...others} />);
}

export default Component;
