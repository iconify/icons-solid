import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a2fefzbda.css';
import '../../css/t/ttor7fbzl.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="a2fefzbda"/><path class="ttor7fbzl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:foss-events"} {...others} />);
}

export default Component;
