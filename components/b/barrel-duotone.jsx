import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uew948jvc.css';
import '../../css/r/r155nbcpm.css';
import '../../css/x/xkosiwb3r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="uew948jvc"/><path class="r155nbcpm"/><path class="xkosiwb3r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:barrel-duotone"} {...others} />);
}

export default Component;
