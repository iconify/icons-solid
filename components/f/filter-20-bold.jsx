import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rarcuc5bb.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="rarcuc5bb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:filter-20-bold"} {...others} />);
}

export default Component;
