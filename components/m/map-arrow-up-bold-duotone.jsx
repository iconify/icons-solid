import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fevon8ayl.css';
import '../../css/z/z9t-ptwsn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fevon8ayl"/><path class="z9t-ptwsn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:map-arrow-up-bold-duotone"} {...others} />);
}

export default Component;
