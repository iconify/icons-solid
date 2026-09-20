import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tbocwr9ox.css';
import '../../css/a/a2y179_xr.css';
import '../../css/y/yqs0m0w8z.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="tbocwr9ox"/><path class="a2y179_xr"/><path class="yqs0m0w8z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:usb-drive"} {...others} />);
}

export default Component;
