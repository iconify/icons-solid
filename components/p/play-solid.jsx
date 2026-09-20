import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l4jdi0pjs.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="l4jdi0pjs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:play-solid"} {...others} />);
}

export default Component;
