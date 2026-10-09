import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l-h4xkbtz.css';
import '../../css/p/p1ofzbbnm.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="l-h4xkbtz"/><path class="p1ofzbbnm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:jersey-20"} {...others} />);
}

export default Component;
