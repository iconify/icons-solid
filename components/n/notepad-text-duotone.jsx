import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oemvd_byo.css';
import '../../css/x/x8rurvb8y.css';
import '../../css/z/zy0239y8o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="oemvd_byo"/><path class="x8rurvb8y"/><path class="zy0239y8o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:notepad-text-duotone"} {...others} />);
}

export default Component;
