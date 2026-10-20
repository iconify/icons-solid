import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c0-d2gbnz.css';
import '../../css/b/bwrmw-1aq.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="c0-d2gbnz"/><path class="bwrmw-1aq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:align-bottom-20"} {...others} />);
}

export default Component;
