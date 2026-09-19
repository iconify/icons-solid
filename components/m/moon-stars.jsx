import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vujsh2lyd.css';

const viewBox = {"width":56,"height":56};
const content = `<path class="vujsh2lyd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"f7:moon-stars"} {...others} />);
}

export default Component;
