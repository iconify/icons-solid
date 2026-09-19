import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h4u7qfb2i.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="h4u7qfb2i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:electric-light-bulb-small-filled"} {...others} />);
}

export default Component;
