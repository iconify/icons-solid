import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/um-28hxyc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="um-28hxyc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:nest-wifi-repeater"} {...others} />);
}

export default Component;
