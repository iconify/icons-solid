import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yll_otxbc.css';
import '../../css/z/za9i7bcdl.css';
import '../../css/p/pnfi9pbji.css';
import '../../css/o/otblxlbym.css';
import '../../css/o/oe7errbac.css';
import '../../css/i/impgp2bog.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wm-k yll_otxbc"/><path class="wm-k za9i7bcdl"/><path class="pnfi9pbji wm-k"/><path class="otblxlbym wm-shadow"/><path class="oe7errbac wm-shine"/><path class="impgp2bog wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:ticket-percent"} {...others} />);
}

export default Component;
