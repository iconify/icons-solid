import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ihgmx3brz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ihgmx3brz primary"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:semaphore-vertical-duotone"} {...others} />);
}

export default Component;
