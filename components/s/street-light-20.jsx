import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lg4jgbz7f.css';
import '../../css/b/bfg6oocam.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="lg4jgbz7f"/><path class="bfg6oocam"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:street-light-20"} {...others} />);
}

export default Component;
