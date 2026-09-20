import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n5ly0gbwf.css';
import '../../css/u/u_h5xbc3p.css';
import '../../css/p/p4hn9vhms.css';
import '../../css/v/vfcefzb_m.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="n5ly0gbwf"/><path class="u_h5xbc3p"/><path class="p4hn9vhms"/><path class="vfcefzb_m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:safe-vault"} {...others} />);
}

export default Component;
