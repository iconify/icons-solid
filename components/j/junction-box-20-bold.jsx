import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vayamib1a.css';
import '../../css/u/ut922vv1z.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="vayamib1a"/><path class="ut922vv1z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:junction-box-20-bold"} {...others} />);
}

export default Component;
