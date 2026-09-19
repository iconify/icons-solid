import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ed9oapbgn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ed9oapbgn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:arlo-floodlight"} {...others} />);
}

export default Component;
