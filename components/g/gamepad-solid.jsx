import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qn0jcekjr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qn0jcekjr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:gamepad-solid"} {...others} />);
}

export default Component;
