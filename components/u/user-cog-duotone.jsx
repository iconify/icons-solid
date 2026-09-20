import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e6yhmq1dy.css';
import '../../css/b/bc3db-fby.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e6yhmq1dy"/><path class="bc3db-fby"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:user-cog-duotone"} {...others} />);
}

export default Component;
