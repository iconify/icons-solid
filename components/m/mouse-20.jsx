import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/non8y593o.css';
import '../../css/b/bbclq6bps.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="non8y593o"/><path class="bbclq6bps"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:mouse-20"} {...others} />);
}

export default Component;
