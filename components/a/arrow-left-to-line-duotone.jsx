import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v0e0veb_i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="primary v0e0veb_i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:arrow-left-to-line-duotone"} {...others} />);
}

export default Component;
