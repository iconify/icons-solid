import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f2-hc7e0a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f2-hc7e0a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:fritz-repeater"} {...others} />);
}

export default Component;
