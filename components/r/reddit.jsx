import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xd8x7abdi.css';

const viewBox = {"width":464,"height":448};
const content = `<path class="xd8x7abdi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:reddit"} {...others} />);
}

export default Component;
