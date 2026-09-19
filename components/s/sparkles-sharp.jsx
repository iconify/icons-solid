import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qbr9q9ucb.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qbr9q9ucb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:sparkles-sharp"} {...others} />);
}

export default Component;
