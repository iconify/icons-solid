import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iw-4-8pcl.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="iw-4-8pcl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:kick-scooter"} {...others} />);
}

export default Component;
