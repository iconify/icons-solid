import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xj4b3949s.css';

const viewBox = {"width":24,"height":24,"top":-6};
const content = `<path class="xj4b3949s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:gamepad-retro"} {...others} />);
}

export default Component;
