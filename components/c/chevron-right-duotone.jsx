import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oiwpa3b3b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oiwpa3b3b primary"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:chevron-right-duotone"} {...others} />);
}

export default Component;
