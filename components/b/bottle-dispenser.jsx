import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x7i89iy-u.css';
import '../../css/v/v4_-uz5kn.css';
import '../../css/v/vm-oljptf.css';
import '../../css/t/ti73fqlrr.css';
import '../../css/y/yo8y0bcgm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle class="x7i89iy-u"/><path class="v4_-uz5kn"/><rect class="vm-oljptf"/><path class="ti73fqlrr"/><path class="yo8y0bcgm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:bottle-dispenser"} {...others} />);
}

export default Component;
