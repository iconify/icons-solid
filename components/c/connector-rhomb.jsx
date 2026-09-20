import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b2-b6eria.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="b2-b6eria"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:connector-rhomb"} {...others} />);
}

export default Component;
