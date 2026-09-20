import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g8mc_4l0a.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="g8mc_4l0a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:campsite-and-wifi"} {...others} />);
}

export default Component;
