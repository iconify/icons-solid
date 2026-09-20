import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tvec1l3uw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tvec1l3uw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:settings-3-line"} {...others} />);
}

export default Component;
