import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fy8y-8xfl.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="fy8y-8xfl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cib:facebook-f"} {...others} />);
}

export default Component;
