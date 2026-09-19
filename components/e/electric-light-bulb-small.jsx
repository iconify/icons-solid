import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gknle0bvp.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="gknle0bvp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:electric-light-bulb-small"} {...others} />);
}

export default Component;
