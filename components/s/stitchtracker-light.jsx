import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iou1crsje.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="iou1crsje"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:stitchtracker-light"} {...others} />);
}

export default Component;
