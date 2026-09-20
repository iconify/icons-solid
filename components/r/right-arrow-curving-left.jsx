import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/adh2_0ble.css';
import '../../css/y/y0igkftrk.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="adh2_0ble"/><path class="y0igkftrk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:right-arrow-curving-left"} {...others} />);
}

export default Component;
