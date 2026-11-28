import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/la0tybdob.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="la0tybdob primary"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:circle-off-duotone"} {...others} />);
}

export default Component;
