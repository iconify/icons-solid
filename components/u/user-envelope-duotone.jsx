import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j1587w2qu.css';
import '../../css/o/ow15xdb1e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j1587w2qu"/><path class="ow15xdb1e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:user-envelope-duotone"} {...others} />);
}

export default Component;
