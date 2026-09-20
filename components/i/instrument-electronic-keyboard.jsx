import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kxcyswb1d.css';
import '../../css/n/ndsn13p7t.css';
import '../../css/e/e2b_iy-oc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kxcyswb1d"/><path class="ndsn13p7t"/><path class="e2b_iy-oc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:instrument-electronic-keyboard"} {...others} />);
}

export default Component;
