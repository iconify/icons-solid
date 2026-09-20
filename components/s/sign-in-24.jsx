import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vuww48bcd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vuww48bcd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:sign-in-24"} {...others} />);
}

export default Component;
