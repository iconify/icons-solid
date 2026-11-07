import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/bcgh91bjm.css';
import '../../css/f/fyr67fbfm.css';
import '../../css/n/nt3og-bhm.css';
import '../../css/i/iofcxjb4n.css';
import '../../css/g/gvinp5b1p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="bcgh91bjm"/><path class="fyr67fbfm"/><path class="nt3og-bhm"/><path class="iofcxjb4n"/><path class="gvinp5b1p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:flash-drive-linear"} {...others} />);
}

export default Component;
