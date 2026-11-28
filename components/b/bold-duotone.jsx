import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ibja0x6pk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ibja0x6pk primary"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:bold-duotone"} {...others} />);
}

export default Component;
