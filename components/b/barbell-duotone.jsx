import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vnp4-d4ot.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="primary vnp4-d4ot"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:barbell-duotone"} {...others} />);
}

export default Component;
