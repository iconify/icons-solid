import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x8_-mvbmk.css';
import '../../css/n/n5nqfww4w.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="x8_-mvbmk"/><path class="n5nqfww4w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:arrow-right-to-line-48-bold"} {...others} />);
}

export default Component;
