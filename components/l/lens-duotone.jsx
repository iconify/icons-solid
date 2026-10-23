import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lo4pkcbpt.css';
import '../../css/j/jrp2xebmc.css';
import '../../css/g/gx35_lbkf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="lo4pkcbpt"/><path class="jrp2xebmc"/><path class="gx35_lbkf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:lens-duotone"} {...others} />);
}

export default Component;
