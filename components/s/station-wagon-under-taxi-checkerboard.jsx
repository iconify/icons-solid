import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zo9na3cxo.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="zo9na3cxo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:station-wagon-under-taxi-checkerboard"} {...others} />);
}

export default Component;
