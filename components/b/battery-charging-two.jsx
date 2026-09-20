import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/de_jx0dbj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="de_jx0dbj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:battery-charging-two"} {...others} />);
}

export default Component;
