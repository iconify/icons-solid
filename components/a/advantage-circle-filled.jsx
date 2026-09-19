import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ubv59m5ci.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="ubv59m5ci"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:advantage-circle-filled"} {...others} />);
}

export default Component;
