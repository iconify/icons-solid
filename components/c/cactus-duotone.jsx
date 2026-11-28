import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xcn3b7e3e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="primary xcn3b7e3e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:cactus-duotone"} {...others} />);
}

export default Component;
