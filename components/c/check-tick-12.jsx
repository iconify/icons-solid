import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/moxwz9eot.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="moxwz9eot"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:check-tick-12"} {...others} />);
}

export default Component;
