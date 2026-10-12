import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y2wv7tbdk.css';
import '../../css/f/flbhffbne.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="y2wv7tbdk"/><path class="flbhffbne"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:scanner-20"} {...others} />);
}

export default Component;
