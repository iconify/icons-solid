import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nh6gu7bbw.css';
import '../../css/u/utcfm6g2i.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="nh6gu7bbw"/><path class="utcfm6g2i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:backpack-48"} {...others} />);
}

export default Component;
