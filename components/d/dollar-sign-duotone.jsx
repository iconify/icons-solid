import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c_wlz3bgu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c_wlz3bgu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:dollar-sign-duotone"} {...others} />);
}

export default Component;
