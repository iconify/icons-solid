import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w2c_h5xxn.css';
import '../../css/w/wvwdkcb2e.css';
import '../../css/u/u2vuu1tco.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="w2c_h5xxn"/><path class="wvwdkcb2e"/><path class="u2vuu1tco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:bed-double-duotone"} {...others} />);
}

export default Component;
