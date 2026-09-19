import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lr88xkbwm.css';

const viewBox = {"width":1025,"height":1025};
const content = `<path class="lr88xkbwm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:mantisbugtracker"} {...others} />);
}

export default Component;
