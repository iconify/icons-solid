import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vxbvk3b8j.css';
import '../../css/i/i5thibbft.css';
import '../../css/v/vjqdtotvw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="vxbvk3b8j"/><path class="i5thibbft"/><path class="vjqdtotvw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:file-axis3d"} {...others} />);
}

export default Component;
