import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ymayf7r7m.css';
import '../../css/o/ow15xdb1e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ymayf7r7m"/><path class="ow15xdb1e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:user-clock-duotone"} {...others} />);
}

export default Component;
