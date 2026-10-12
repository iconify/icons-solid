import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/flxn7o3ta.css';
import '../../css/o/ohv1qhbhs.css';
import '../../css/l/lopzz-bpw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="flxn7o3ta"/><path class="ohv1qhbhs"/><path class="lopzz-bpw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:satellite-dish-duotone"} {...others} />);
}

export default Component;
