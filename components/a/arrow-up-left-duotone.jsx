import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3q-b4urp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="primary v3q-b4urp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:arrow-up-left-duotone"} {...others} />);
}

export default Component;
