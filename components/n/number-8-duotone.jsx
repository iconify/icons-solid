import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p6e5x5bmc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p6e5x5bmc primary"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:number-8-duotone"} {...others} />);
}

export default Component;
