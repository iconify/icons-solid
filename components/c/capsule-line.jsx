import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ymx8q3l6u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ymx8q3l6u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:capsule-line"} {...others} />);
}

export default Component;
