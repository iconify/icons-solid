import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p7ndmlpoh.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="p7ndmlpoh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:tired-face-with-oral-thermometer-and-brow-sweat-in-circle"} {...others} />);
}

export default Component;
