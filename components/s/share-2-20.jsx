import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lu29sma9m.css';
import '../../css/y/y8de8nbur.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="lu29sma9m"/><path class="y8de8nbur"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:share-2-20"} {...others} />);
}

export default Component;
